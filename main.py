import time
import requests
from src.gateways.polymarket.client import PolymarketClient
from src.strategies.black_scholes import BlackScholes, PricingInput

def run_loop():
    client = PolymarketClient()
    
    # Example: BTC > 100k
    # Input Data (Mocked for now)
    btc_price = 98000
    strike = 100000
    days_left = 5
    volatility = 0.60 # 60% IV
    
    print("--- Starting Trading Loop ---")
    while True:
        try:
            # 1. Get Live Price (Binance Free API)
            url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
            r = requests.get(url, timeout=5)
            btc_price = float(r.json()["price"])
            print(f"\n[Live] BTC Price: ${btc_price:,.2f}")

            # 2. Calculate Fair Value
            inp = PricingInput(
                asset_price=btc_price,
                strike_price=strike,
                time_to_expiry_years=days_left / 365.0,
                volatility=volatility
            )
            fair_price = BlackScholes.binary_call_price(inp)
            prob_pct = fair_price * 100
            print(f"Fair Value (Yes): {fair_price:.4f} ({prob_pct:.1f}%)")
            
            # 3. Decision Logic (Mocked)
            # if fair_price > 0.70:
            #     print("=> SIGNAL: BUY YES")
            # elif fair_price < 0.30:
            #     print("=> SIGNAL: BUY NO")
            
        except Exception as e:
            print(f"Error fetching price: {e}")

        time.sleep(5)

if __name__ == "__main__":
    run_loop()
