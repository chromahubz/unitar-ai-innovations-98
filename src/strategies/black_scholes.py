import numpy as np
from scipy.stats import norm
from dataclasses import dataclass

@dataclass
class PricingInput:
    asset_price: float
    strike_price: float
    time_to_expiry_years: float
    volatility: float # Annualized (e.g., 0.6 for 60%)
    risk_free_rate: float = 0.04 # 4%

class BlackScholes:
    """
    Calculates the probability of an event (binary call option).
    """
    
    @staticmethod
    def call_probability(data: PricingInput) -> float:
        """
        Returns N(d2), which is the risk-neutral probability that S > K at expiry.
        Note: For binary options paying $1, the price is approximately e^(-rT) * N(d2).
        """
        if data.time_to_expiry_years <= 0:
            return 1.0 if data.asset_price >= data.strike_price else 0.0
            
        d1 = (np.log(data.asset_price / data.strike_price) + \
              (data.risk_free_rate + 0.5 * data.volatility ** 2) * data.time_to_expiry_years) / \
             (data.volatility * np.sqrt(data.time_to_expiry_years))
             
        d2 = d1 - data.volatility * np.sqrt(data.time_to_expiry_years)
        
        # Binary Call Price = e^(-rT) * N(d2)
        # But we often just want the raw Probability of ITM = N(d2)
        return norm.cdf(d2)

    @staticmethod
    def binary_call_price(data: PricingInput) -> float:
        """
        Fair value of a binary call option paying $1.
        """
        prob = BlackScholes.call_probability(data)
        discount_factor = np.exp(-data.risk_free_rate * data.time_to_expiry_years)
        return prob * discount_factor
