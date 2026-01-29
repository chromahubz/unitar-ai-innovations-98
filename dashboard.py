import streamlit as st
import time
import pandas as pd
import numpy as np
import requests
import plotly.graph_objects as go
import copy
import uuid
from datetime import datetime
from src.strategies.black_scholes import BlackScholes, PricingInput

# --- Configuration ---
st.set_page_config(
    page_title="TradeFox // Terminal",
    page_icon=":material/candlestick_chart:",
    layout="wide",
    initial_sidebar_state="expanded",
)

from src.gateways.polymarket.client import PolymarketClient
# --- Global API Instance & Caching ---
pm = PolymarketClient()

@st.cache_data(ttl=60)
def cached_search(query):
    return copy.deepcopy(pm.search_markets(query))

@st.cache_data(ttl=120)
def cached_history(token_id, interval, fidelity):
    return copy.deepcopy(pm.get_price_history(token_id, interval, fidelity))

# --- TradeFox Theme CSS ---
st.markdown("""
<style>
    /* Container Styling */
    .stApp { color: #e0e0e0; }
    
    /* Header Stats */
    div[data-testid="stMetricValue"] { font-family: 'Roboto Mono', monospace; font-size: 1.8rem; }
    
    /* Buttons */
    .stButton > button {
        background-color: #00d4aa; /* TradeFox Teal */
        color: #000000;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        height: 50px;
    }
    .stButton > button:hover { background-color: #00b390; color: #fff; }
    
    /* Inputs */
    .stTextInput > div > div > input, .stNumberInput > div > div > input {
        background-color: #1a1e23;
        color: #fff;
        border: 1px solid #333;
    }
    
    /* Order Book Simulation */
    .ask-row { color: #ff4d4d; font-family: monospace; display: flex; justify-content: space-between; }
    .bid-row { color: #00d4aa; font-family: monospace; display: flex; justify-content: space-between; }
    .price { font-weight: bold; }
    
</style>
""", unsafe_allow_html=True)

# --- Helper: Asset Mapper ---
def get_ticker_from_question(q: str):
    q = q.lower()
    if "eth" in q or "ethereum" in q: return "ETHUSDT"
    if "sol" in q or "solana" in q: return "SOLUSDT"
    if "doge" in q: return "DOGEUSDT"
    if "xrp" in q: return "XRPUSDT"
    if "bnb" in q: return "BNBUSDT"
    return "BTCUSDT"

# --- Global Default State (Session Protected) ---
if "active_ticker" not in st.session_state: st.session_state.active_ticker = "BTCUSDT"
if "active_clob_id" not in st.session_state: st.session_state.active_clob_id = None
if "active_image" not in st.session_state: st.session_state.active_image = None
if "active_volume" not in st.session_state: st.session_state.active_volume = 0.0
if "active_liquidity" not in st.session_state: st.session_state.active_liquidity = 0.0
if "active_start_date" not in st.session_state: st.session_state.active_start_date = "N/A"
if "all_outcomes" not in st.session_state: st.session_state.all_outcomes = []
if "results" not in st.session_state: st.session_state.results = []
if "market_name" not in st.session_state: st.session_state.market_name = "Select Market"
if "market_price" not in st.session_state: st.session_state.market_price = 0.5
if "market_expiry" not in st.session_state: st.session_state.market_expiry = datetime(2026, 12, 31)
if "selected_q" not in st.session_state: st.session_state.selected_q = None

# --- Logic & State ---
if "history" not in st.session_state:
    st.session_state.history = pd.DataFrame(columns=["Time", "Asset Price", "Market Price", "Fair Value"])
if "current_ticker" not in st.session_state:
    st.session_state.current_ticker = "BTCUSDT"
if "current_era" not in st.session_state:
    st.session_state.current_era = "6h"
if "current_fidelity" not in st.session_state:
    st.session_state.current_fidelity = 1
if "search_version" not in st.session_state:
    st.session_state.search_version = 0
if "event_version" not in st.session_state:
    st.session_state.event_version = 0
if "ui_mask" not in st.session_state:
    st.session_state.ui_mask = False

def nuclear_reset():
    st.session_state.ui_mask = True
    st.session_state.all_outcomes = []
    st.session_state.active_clob_id = None
    st.session_state.active_ticker = "BTCUSDT"
    st.session_state.active_image = None
    st.session_state.active_volume = 0.0
    st.session_state.active_liquidity = 0.0
    st.session_state.active_start_date = "N/A"
    st.session_state.market_name = "Select Market"
    st.session_state.market_price = 0.5
    st.session_state.market_expiry = datetime(2026, 12, 31)
    st.session_state.history = pd.DataFrame(columns=["Time", "Asset Price", "Market Price", "Fair Value"])
    st.session_state.last_key = ""
    st.session_state.active_sync_id = "reset"
    st.session_state.search_sync_id = "reset"
    # Explicit deletion for zero-leakage
    if 'all_outcomes' in st.session_state: del st.session_state.all_outcomes

def init_historical_data(ticker, clob_id=None, interval="6h", fidelity=1):
    hist_data = []

    # 1. Try Polymarket History First
    if clob_id:
        try:
            raw_hist = cached_history(clob_id, interval, fidelity)
            if raw_hist:
                for pt in raw_hist:
                    hist_data.append({
                        "Time": pt['Time'],
                        "Asset Price": 0.0, # Will be backfilled if possible
                        "Market Price": pt['Price'],
                        "Fair Value": pt['Price']
                    })
                st.session_state.history = pd.DataFrame(hist_data) # Load full available history
                st.session_state.data_source = "POLYMARKET (CLOB)"
                print(f"DEBUG: Successfully loaded {len(hist_data)} pts from Poly")
                return
        except Exception as e:
            print(f"DEBUG: Poly History Fetch Error: {e}")

    # 2. Fallback to Binance
    try:
        url = f"https://api.binance.com/api/v3/klines?symbol={ticker}&interval=1h&limit=50"
        resp = requests.get(url).json()
        for x in resp:
            t = datetime.fromtimestamp(x[0] / 1000)
            price = float(x[4])
            hist_data.append({
                "Time": t, 
                "Asset Price": price, 
                "Market Price": 0.50, # Placeholder
                "Fair Value": 0.50
            })
        st.session_state.history = pd.DataFrame(hist_data)
        st.session_state.data_source = f"BINANCE PROXY ({ticker})"
    except:
        st.session_state.history = pd.DataFrame(columns=["Time", "Asset Price", "Fair Value"])
        st.session_state.data_source = "NO DATA"

def fetch_live_price(ticker):
    try:
        r = requests.get(f"https://api.binance.com/api/v3/ticker/price?symbol={ticker}", timeout=2)
        return float(r.json()["price"])
    except:
        return 0.0

# --- Sidebar: Market Selection ---
with st.sidebar:
    st.header("Market Select", divider="gray")
    search_q = st.text_input("Find Market", placeholder="e.g. Trump, Fed")
    
    # NEW: Detect search change and force reset
    if "last_search" not in st.session_state:
        st.session_state.last_search = ""
    
    if search_q != st.session_state.last_search:
        st.session_state.last_search = search_q
        st.session_state.search_version += 1 
        st.session_state.event_version += 1  
        st.session_state.search_sync_id = f"batch_{st.session_state.search_version}" # Stable for the batch
        st.cache_data.clear() # TOTAL CACHE PURGE on search change
        nuclear_reset()
        st.session_state.market_name = "Searching..."
        # Clear specific outcome selection keys
        to_del = [k for k in st.session_state.keys() if k.startswith("outcome_") or k == "market_selector"]
        for k in to_del: del st.session_state[k]
        st.rerun()

    query = search_q if search_q else "Crypto"
    try:
        results = cached_search(query)
    except:
        results = []
        
    if results:
        # 1. Clean grouping by Event Question (Polymarket Style)
        event_map = {}
        for m in results:
            q = m.get('question', 'Unknown')
            if q not in event_map:
                event_map[q] = []
            event_map[q].append(m)

        unique_questions = list(event_map.keys())

        # Persistent selection logic
        if 'market_selector' not in st.session_state:
            st.session_state.market_selector = unique_questions[0] if unique_questions else ""

        sel_key = f"market_selector_v{st.session_state.search_version}"
        selected_q = st.selectbox("Select Event", options=unique_questions, key=sel_key)

        # NEW: Reset on Event Switch (not just search switch)
        if "last_selected_q" not in st.session_state:
            st.session_state.last_selected_q = ""

        if selected_q != st.session_state.last_selected_q:
            st.session_state.last_selected_q = selected_q
            st.session_state.event_version += 1 
            nuclear_reset()
            st.rerun()

        if selected_q:
            # Atomic Sync Handshake (Stable across refreshes)
            batch_id = st.session_state.get('search_sync_id', 'none')
            sync_id = f"{selected_q}_{st.session_state.search_version}"
            
            # HARD LOCK: Verify that this is the market we actually want to show
            if st.session_state.get('last_selected_q') == selected_q:
                # Update outcomes ONLY if synchronized
                if st.session_state.get('active_sync_id') != sync_id:
                    raw_outcomes = copy.deepcopy(event_map[selected_q])
                    for r in raw_outcomes: 
                        r['_sync_handshake'] = sync_id
                        r['_search_batch_id'] = batch_id 
                    st.session_state.all_outcomes = raw_outcomes
                    st.session_state.active_sync_id = sync_id 
                
                # Ensure we have a valid m from the CURRENT synchronized list
                outcomes = st.session_state.get('all_outcomes', [])
                if outcomes:
                    m = next((o for o in outcomes if o['clob_id'] == st.session_state.get(f"outcome_{selected_q}")), outcomes[0])
                    
                    st.session_state.market_name = f"{m['question']} - {m['outcome']}" if len(outcomes) > 1 else m['question']
                    st.session_state.active_ticker = get_ticker_from_question(m['question'])
                    st.session_state.active_clob_id = m['clob_id']
                    st.session_state.active_image = m.get('image')
                    st.session_state.active_volume = sum(float(o.get('volume', 0)) for o in outcomes)
                    st.session_state.active_liquidity = sum(float(o.get('liquidity', 0)) for o in outcomes)
                    st.session_state.active_start_date = m.get('start_date', 'N/A')
                    try:
                        st.session_state.market_expiry = datetime.strptime(m['end_date'].split("T")[0], "%Y-%m-%d")
                        prices = m.get('prices', ['0.5'])
                        if isinstance(prices, str):
                            import json
                            prices = json.loads(prices)
                        st.session_state.market_price = float(prices[0]) if prices else 0.5
                    except: pass
            
    else:
        # Strictly clear everything if no results
        nuclear_reset()
        st.session_state.market_name = "No Results Found"
            
    current_key = f"{st.session_state.active_ticker}_{st.session_state.active_clob_id}_{st.session_state.get('current_era', '6H')}"
    if "last_key" not in st.session_state: st.session_state.last_key = ""
    
    if st.session_state.last_key != current_key:
        st.session_state.last_key = current_key
        st.session_state.current_ticker = st.session_state.active_ticker
        # Use poly_interval from state
        p_interval = st.session_state.get('current_poly_interval', '6h')
        p_fidelity = st.session_state.get('current_fidelity', 1)
        init_historical_data(st.session_state.active_ticker, st.session_state.active_clob_id, interval=p_interval, fidelity=p_fidelity)

    with st.sidebar.expander("🕵️ State Debugger"):
        st.write(f"**Event Selector:** `{st.session_state.get('market_selector', 'None')}`")
        st.write(f"**Selected Q:** `{st.session_state.get('last_selected_q', 'None')}`")
        st.write(f"**Active ID:** `{st.session_state.active_clob_id}`")
        st.write(f"**Outcomes Count:** `{len(st.session_state.all_outcomes)}`")
        if st.session_state.all_outcomes:
            st.write("**Outcome IDs:**", [o.get('clob_id') for o in st.session_state.all_outcomes][:3])
        
        if st.button("Clear API Cache", use_container_width=True):
            st.cache_data.clear()
            st.rerun()

    st.divider()
    st.caption("Dashboard Settings")
    refresh_rate = st.sidebar.slider("Refresh Interval (Seconds)", 1, 60, 2)
    
    st.caption("Strategy Config")
    strike = st.number_input(f"Strike Price ({st.session_state.active_ticker[:3]})", value=100000.0)
    vol = st.slider("Implied Vol (IV)", 0.1, 1.5, 0.65)
    
    st.divider()
    bot_active = st.toggle("System Online", value=True)

# --- Main Terminal ---
if st.session_state.ui_mask:
    with st.container():
        st.markdown('<div style="height: 600px; display: flex; align-items: center; justify-content: center;"><h2 style="color: #00d4aa; opacity: 0.5;"> Fox Terminal // Reloading...</h2></div>', unsafe_allow_html=True)
    st.session_state.ui_mask = False
    time.sleep(0.1)
    st.rerun()

with st.container(key=f"terminal_v{st.session_state.event_version}"):
    asset_price = 0.0
    fair = 0.0
    days = 0
    
    if bot_active:
        asset_price = fetch_live_price(st.session_state.active_ticker)
        
        # NEW: Fetch Live CLOB Price if available
        if st.session_state.active_clob_id:
            try:
                live_mkt = pm.get_last_price(st.session_state.active_clob_id)
                if live_mkt > 0: st.session_state.market_price = live_mkt
            except: pass
            
        days = (st.session_state.market_expiry.date() - datetime.now().date()).days
        price_inp = PricingInput(asset_price, strike, max(days, 1)/365.0, vol)
        fair = BlackScholes.call_probability(price_inp)
        
        new_row = {
            "Time": datetime.now(), 
            "Asset Price": asset_price, 
            "Market Price": st.session_state.market_price,
            "Fair Value": fair
        }
        st.session_state.history = pd.concat([st.session_state.history, pd.DataFrame([new_row])], ignore_index=True).tail(1000) # Increased buffer
    
    elif not st.session_state.history.empty:
        last = st.session_state.history.iloc[-1]
        asset_price = last["Asset Price"]
        fair = last["Fair Value"]
        days = (st.session_state.market_expiry.date() - datetime.now().date()).days
    
    # --- UI Layout: Header Metrics ---
    c1, c2, c3, c4, c5 = st.columns([1, 1, 1, 1, 1])
    
    # Defensive casting for display
    try:
        v_val = float(st.session_state.active_volume)
        l_val = float(st.session_state.active_liquidity)
        m_val = float(st.session_state.market_price)
    except:
        v_val, l_val, m_val = 0.0, 0.0, 0.0
    
    with c1:
        if st.session_state.active_image: st.image(st.session_state.active_image, width=70) # Larger image like ref
        else: st.metric("Market", f"{st.session_state.active_ticker}", f"${asset_price:,.2f}")
    
    c2.metric("Chance", f"{(m_val*100):.1f}%")
    c3.metric("Liquidity", f"${l_val:,.2f}")
    c4.metric("Volume", f"${v_val:,.2f}")
    c5.metric("Start Date", f"{st.session_state.active_start_date[:10]}")
    
    st.divider()
    
    # --- Main Terminal Layout ---
    col_chart, col_trade = st.columns([3, 1])
    
    with col_chart:
        # --- Timeframe Selectors (TradeFox Style) ---
        ERA_CONFIGS = {
            "1H": {"fidelity": 1, "poly_interval": "1h"},
            "6H": {"fidelity": 1, "poly_interval": "6h"},
            "1D": {"fidelity": 5, "poly_interval": "1d"},
            "1W": {"fidelity": 60, "poly_interval": "1w"},
            "1M": {"fidelity": 60, "poly_interval": "1m"},
            "ALL": {"fidelity": 1440, "poly_interval": "all"}
        }
        # Era toolbar (Rectangular and horizontal - Smaller)
        c_era, c_spacer = st.columns([2, 1])
        with c_era:
            sub_cols = st.columns(len(ERA_CONFIGS))
            # Custom CSS for smaller era buttons - targeted aggressively
            st.markdown("""
            <style>
                /* TARGET BUTTONS IN ERA ROW ONLY */
                [data-testid="stColumn"] button[key^="era_"] {
                    height: 1.25rem !important;
                    min-height: 1.25rem !important;
                    padding: 0px 4px !important;
                    margin: 0px !important;
                }
                [data-testid="stColumn"] button[key^="era_"] div p {
                    font-size: 0.65rem !important;
                    line-height: normal !important;
                    margin-top: -8px !important; /* Center text in squashed button */
                }
            </style>
            """, unsafe_allow_html=True)
            for i, (era, cfg) in enumerate(ERA_CONFIGS.items()):
                is_active = (st.session_state.current_era == era)
                era_btn_key = f"era_{era}_v{st.session_state.event_version}"
                if sub_cols[i].button(era, key=era_btn_key, use_container_width=True, type="primary" if is_active else "secondary"):
                    st.session_state.current_era = era
                    st.session_state.current_poly_interval = cfg["poly_interval"]
                    st.session_state.current_fidelity = cfg["fidelity"]
                    st.session_state.history = pd.DataFrame(columns=["Time", "Asset Price", "Market Price", "Fair Value"])
                    st.rerun()
    
        st.caption(f"{st.session_state.market_name}")
        st.markdown(f"## {st.session_state.market_price*100:.1f}% Chance")
        
        hist = st.session_state.history.copy()
        if not hist.empty:
            # NEW: Add high-res padding point for professional offset (15% future space)
            last_time = hist["Time"].iloc[-1]
            start_time = hist["Time"].iloc[0]
            buffer_td = (last_time - start_time) * 0.15
            
            future_row = pd.DataFrame([{
                "Time": last_time + buffer_td,
                "Asset Price": np.nan, "Market Price": np.nan, "Fair Value": np.nan
            }])
            hist_display = pd.concat([hist, future_row], ignore_index=True)
            
            # Convert to percentages for display
            hist_display["Market Price %"] = hist_display["Market Price"] * 100
            hist_display["Fair Value %"] = hist_display["Fair Value"] * 100
            
            fig = go.Figure()
            
            # Fair Value (Subtle)
            fig.add_trace(go.Scatter(
                x=hist_display["Time"], 
                y=hist_display["Fair Value %"], 
                mode='lines', 
                name='Fair Value', 
                line=dict(color='rgba(255, 255, 0, 0.4)', width=1, dash='dot')
            ))
            
            # Main Probability Line (Teal)
            fig.add_trace(go.Scatter(
                x=hist_display["Time"], 
                y=hist_display["Market Price %"], 
                mode='lines', 
                name='Market Price', 
                line=dict(color='#00d4aa', width=3),
                fill='tozeroy',
                fillcolor='rgba(0, 212, 170, 0.05)',
                connectgaps=False # Ensure the padding point doesn't draw a line
            ))
    
            fig.update_layout(
                template="plotly_dark",
                paper_bgcolor='#0b0e11',
                plot_bgcolor='#0b0e11',
                height=700, # Increased height for full terminal feel
                hovermode="x unified",
                uirevision=st.session_state.active_clob_id,
                xaxis=dict(
                    showgrid=True, 
                    gridcolor='#1a1e23',
                    showline=True,
                    linecolor='#333',
                    type='date'
                ),
                yaxis=dict(
                    showgrid=True, 
                    gridcolor='#1a1e23',
                    tickformat=".1f",
                    ticksuffix="%",
                    side="right",
                    dtick=2.0,
                    autorange=True,
                    fixedrange=False # Allow vertical zoom
                ),
                showlegend=False,
                # Right Margin / Padding for professional look
                margin=dict(l=40, r=80, t=10, b=0), # Increased Right Margin
                # NEW: Tracking Label as seen in TradeFox
                annotations=[dict(
                    x=hist_display["Time"].iloc[-2],
                    y=hist_display["Market Price %"].iloc[-2],
                    xref="x",
                    yref="y",
                    text=f"<b>{st.session_state.market_name[:40]}... {hist_display['Market Price %'].iloc[-2]:.1f}%</b>",
                    showarrow=False,
                    align="left",
                    xanchor="left",
                    bgcolor="rgba(21, 25, 30, 0.9)",
                    bordercolor="#00d4aa",
                    borderwidth=1,
                    borderpad=6,
                    font=dict(color="#00d4aa", size=11),
                    captureevents=True
                )]
            )
            
            # Add TradeFox watermark/logo look
            fig.add_annotation(
                text="tradefox",
                xref="paper", yref="paper",
                x=0.02, y=0.98,
                showarrow=False,
                font=dict(size=14, color="rgba(255,255,255,0.2)", family="monospace")
            )
    
            # Add horizontal line at last price
            fig.add_hline(y=hist_display["Market Price %"].iloc[-2], line_dash="dash", line_color="rgba(255,255,255,0.2)", line_width=1)
            
            st.plotly_chart(fig, use_container_width=True, key="main_chart")
            
        else:
            st.info("Searching for historical data...")
        # --- Multi-Outcome Results Table ---
        with st.container(key=f"outcomes_v{st.session_state.event_version}"):
            # MASTER HANDSHAKE GUARD
            is_valid = False
            curr_sync = st.session_state.get('active_sync_id', 'none')
            curr_batch = st.session_state.get('search_sync_id', 'none')
            
            out_list = st.session_state.get('all_outcomes', [])
            if out_list:
                handshake = out_list[0].get('_sync_handshake', 'stale')
                batch = out_list[0].get('_search_batch_id', 'stale')
                if handshake == curr_sync and batch == curr_batch:
                    is_valid = True
            
            # Show ONLY if > 2 outcomes (Binary Yes/No handled by buttons)
            if is_valid and len(out_list) > 2:
                st.divider()
                st.write(f"### Outcomes: {st.session_state.get('last_selected_q', 'Event')}")
                for idx, out in enumerate(st.session_state.all_outcomes):
                    col_name, col_prob, col_btns = st.columns([3, 1, 2])
                    name = out['outcome']
                    
                    # Robust price extraction
                    prices_raw = out.get('prices', ['0.5', '0.5'])
                    if isinstance(prices_raw, str):
                        try:
                            import json
                            prices_raw = json.loads(prices_raw)
                        except:
                            prices_raw = [0.5]
                    
                    try:
                        if isinstance(prices_raw, list) and len(prices_raw) > 0:
                            p_val = float(prices_raw[0])
                        else:
                            p_val = 0.5
                    except:
                        p_val = 0.5
                    
                    col_name.write(f"**{name}**")
                    col_prob.write(f"{p_val*100:.1f}%")
                    
                    # Select Button
                    is_active = (out.get('clob_id') == st.session_state.active_clob_id)
                    btn_key = f"sel_{st.session_state.get('last_selected_q', 'none')}_{out.get('clob_id', 'none')}_{idx}_v{st.session_state.event_version}"
                    if col_btns.button("TRADE", key=btn_key, use_container_width=True, type="primary" if is_active else "secondary"):
                        st.session_state[f"outcome_{st.session_state.get('last_selected_q')}"] = out['clob_id']
                        st.session_state.history = pd.DataFrame(columns=["Time", "Asset Price", "Market Price", "Fair Value"])
                        st.rerun()
    
    with col_trade:
        st.markdown("### Order Book")
        
        # NEW: Fetch Real Order Book
        ob_data = {"bids": [], "asks": []}
        if st.session_state.active_clob_id:
            try:
                real_ob = pm.get_orderbook(st.session_state.active_clob_id)
                ob_data["bids"] = real_ob.bids[:5]
                ob_data["asks"] = real_ob.asks[:5][::-1] # Reverse asks for top-down display
            except: pass
            
        cp = st.session_state.market_price * 100
        
        # UI Component
        st.markdown('<div style="background-color: #060809; padding: 12px; border-radius: 4px; border: 1px solid #1a1e23;">', unsafe_allow_html=True)
        st.markdown('<div style="display: flex; justify-content: space-between; color: #555; font-size: 0.7rem; margin-bottom: 8px;"><span>Price (¢)</span> <span>Size</span> <span>Total(USD)</span></div>', unsafe_allow_html=True)
        
        for ask_p, ask_s in ob_data["asks"]:
            total = ask_p * ask_s
            st.markdown(f'<div class="ask-row"><span>{ask_p*100:.2f}¢</span> <span>{ask_s:,.0f}</span> <span>${total:,.0f}</span></div>', unsafe_allow_html=True)
        
        st.markdown(f'<div style="text-align: center; color: #555; padding: 8px; font-size: 0.8rem; border-top: 1px solid #1a1e23; border-bottom: 1px solid #1a1e23;">Spread {(ob_data["asks"][0][0]-ob_data["bids"][0][0])*100 if ob_data["bids"] and ob_data["asks"] else 0.1:.2f}¢</div>', unsafe_allow_html=True)
        
        for bid_p, bid_s in ob_data["bids"]:
            total = bid_p * bid_s
            st.markdown(f'<div class="bid-row"><span>{bid_p*100:.2f}¢</span> <span>{bid_s:,.0f}</span> <span>${total:,.0f}</span></div>', unsafe_allow_html=True)
        
        st.markdown('</div>', unsafe_allow_html=True)
        
        st.divider()
        
        # NEW: Buy/Sell Panel as seen in ref
        col_yes, col_no = st.columns(2)
        with col_yes:
            st.button(f"Yes {(st.session_state.market_price*100):.2f}¢", icon=":material/check_circle:", type="primary", use_container_width=True)
        with col_no:
            st.button(f"No {(100 - st.session_state.market_price*100):.2f}¢", icon=":material/cancel:", use_container_width=True)
        
        tab_buy, tab_sell = st.tabs(["Buy YES", "Sell YES"])
        with tab_buy:
            amt = st.number_input("Amount (USDC)", value=100)
            limit = st.number_input("Limit Price", value=fair, format="%.2f")
            if st.button("PLACE BUY ORDER", icon=":material/shopping_cart:", width='stretch'):
                 with st.spinner("Signing..."):
                     time.sleep(1)
                     st.success(f"Filled: {amt} USDC @ {limit:.2f}")
    
        with tab_sell:
            st.caption("Short Position")
            if st.button("PLACE SELL ORDER", icon=":material/sell:", width='stretch'):
                st.error("Insufficient Balance")
    
    # --- Footer: Related Markets ---
    st.divider()
    st.subheader("Related Markets")
    rf1, rf2, rf3 = st.columns(3)
    with rf1:
        st.markdown("""
        <div style="background: #111; padding: 10px; border-radius: 4px; border-left: 3px solid #00d4aa;">
            <small>Next Fed Meeting</small><br><b>25bps Cut</b> <span style="color: #00d4aa; float: right;">85%</span>
        </div>
        """, unsafe_allow_html=True)
    with rf2:
        st.markdown("""
        <div style="background: #111; padding: 10px; border-radius: 4px; border-left: 3px solid #ff4d4d;">
            <small>Crypto Market Cap</small><br><b>>$4T by Mar</b> <span style="color: #ff4d4d; float: right;">12%</span>
        </div>
        """, unsafe_allow_html=True)
    with rf3:
        st.markdown("""
        <div style="background: #111; padding: 10px; border-radius: 4px; border-left: 3px solid #666;">
            <small>Ethereum Spot ETF</small><br><b>April Approval</b> <span style="color: #666; float: right;">45%</span>
        </div>
        """, unsafe_allow_html=True)
    
    # Refresh
    time.sleep(refresh_rate) # Respect user-defined refresh interval
    if bot_active: st.rerun()
