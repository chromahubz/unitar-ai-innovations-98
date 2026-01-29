import requests
from datetime import datetime
from src.core.interfaces import Exchange, Market, OrderBook, Side

class PolymarketClient(Exchange):
    BASE_URL = "https://clob.polymarket.com"
    GAMMA_URL = "https://gamma-api.polymarket.com"

    def __init__(self, api_key: str = None):
        self.api_key = api_key
        self.session = requests.Session()

    
    def search_markets(self, query: str) -> list[dict]:
        """
        Search for active markets via Gamma API.
        """
        url = f"{self.GAMMA_URL}/events"
        # Fetching more events to allow for better client-side filtering
        params = {
            "limit": 100, 
            "active": "true",
            "archived": "false",
            "closed": "false",
            "order": "volume24hr", # specific to some endpoints, worth a try or defaults to recent
            "ascending": "false"
        }
        
        try:
            resp = self.session.get(url, params=params)
            resp.raise_for_status()
            data = resp.json()
            
            results = []
            for event in data:
                title = event.get('title', '')
                # If query is empty/generic, perform looser match
                # If query is specific, strict match
                if not query or query.lower() in title.lower() or query == "Crypto":
                    markets = event.get('markets', [])
                    for mkt in markets:
                        # Extract CLOB Token ID
                        raw_ids = mkt.get('clobTokenIds', [])
                        if isinstance(raw_ids, str):
                            import json
                            try:
                                raw_ids = json.loads(raw_ids)
                            except:
                                raw_ids = []
                        
                        clob_id = raw_ids[0] if raw_ids and len(raw_ids) > 0 else None
                        outcome_name = mkt.get('groupItemTitle', mkt.get('outcomes', ['Yes'])[0])
                        
                        prices = mkt.get('outcomePrices', ['0.5', '0.5'])
                        if isinstance(prices, str):
                            import json
                            try: prices = json.loads(prices)
                            except: prices = ['0.5', '0.5']
                        
                        results.append({
                            "id": event.get('id'),
                            "question": title,
                            "outcome": outcome_name,
                            "clob_id": clob_id,
                            "prices": prices,
                            "volume": float(mkt.get('volume', 0) or 0),
                            "liquidity": float(mkt.get('liquidity', 0) or 0),
                            "end_date": event.get('endDate'),
                            "image": event.get('image'),
                            "start_date": event.get('startDate', 'N/A')
                        })
            return results
        except Exception as e:
            print(f"Error fetching markets: {e}")
            return []

    def get_price_history(self, token_id: str, interval: str = '6h', fidelity: int = 1) -> list:
        """Fetch historical prices for a specific token ID."""
        if not token_id:
            print(f"[DEBUG] get_price_history called with None token_id")
            return []
        
        # Interval: span (6h, 1d, 1w) | Fidelity: resolution in mins
        url = "https://clob.polymarket.com/prices-history"
        params = {"market": token_id, "interval": interval, "fidelity": fidelity}
        try:
            resp = self.session.get(url, params=params)
            resp.raise_for_status()
            data = resp.json().get('history', [])
            
            # Convert to friendly format
            # API returns: {"t": timestamp, "p": price, ...}
            formatted = []
            for p in data:
                formatted.append({
                    "Time": datetime.fromtimestamp(p['t']),
                    "Price": float(p['p'])
                })
            return formatted
        except Exception as e:
            print(f"ERROR: Fetching Poly History failed: {e}")
            # Silently fail to allow fallback in dashboard
            return []

    def get_market(self, condition_id: str) -> Market:
        """
        Fetches market details from Gamma API.
        """
        url = f"{self.GAMMA_URL}/events?id={condition_id}"
        resp = self.session.get(url)
        resp.raise_for_status()
        data = resp.json()
        
        # Note: Parsing logic depends on exact Gamma response structure
        # Implementation placeholder
        return Market(id=condition_id, question="Unknown", outcomes=["Yes", "No"])

    def get_orderbook(self, token_id: str) -> OrderBook:
        """
        Fetches CLOB orderbook.
        token_id: The specific Asset ID (Yes or No token).
        """
        url = f"{self.BASE_URL}/book"
        params = {"token_id": token_id}
        resp = self.session.get(url, params=params)
        resp.raise_for_status()
        data = resp.json()
        
        bids = [(float(x['price']), float(x['size'])) for x in data.get('bids', [])]
        asks = [(float(x['price']), float(x['size'])) for x in data.get('asks', [])]
        
        return OrderBook(market_id=token_id, bids=bids, asks=asks)

    def get_last_price(self, token_id: str) -> float:
        """
        Fetch the last traded price from Polymarket CLOB.
        """
        if not token_id: return 0.0
        url = f"{self.BASE_URL}/last-trade-price"
        params = {"token_id": token_id}
        try:
            resp = self.session.get(url, params=params)
            resp.raise_for_status()
            return float(resp.json().get('price', 0.0))
        except:
            return 0.0

    def place_order(self, market_id: str, side: Side, price: float, size: float) -> str:
        print(f"[DRY RUN] Placing {side} Order for {size} @ {price} on {market_id}")
        return "dry_run_id"
