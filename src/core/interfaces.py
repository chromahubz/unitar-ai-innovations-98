from abc import ABC, abstractmethod
from dataclasses import dataclass
from typing import List, Optional, Dict
from enum import Enum

class Side(Enum):
    BUY = "BUY"
    SELL = "SELL"

@dataclass
class Market:
    id: str
    question: str
    outcomes: List[str]
    # e.g., ["Yes", "No"]
    
@dataclass
class OrderBook:
    market_id: str
    bids: List[tuple] # (price, size)
    asks: List[tuple]

class Exchange(ABC):
    """
    Abstract Protocol that any Exchange (Polymarket, Kalshi) must implement.
    """
    
    @abstractmethod
    def get_market(self, market_id: str) -> Market:
        pass
        
    @abstractmethod
    def get_orderbook(self, market_id: str) -> OrderBook:
        pass
        
    @abstractmethod
    def place_order(self, market_id: str, side: Side, price: float, size: float) -> str:
        """Returns Order ID"""
        pass
