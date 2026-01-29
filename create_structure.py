import os

dirs = [
    "src",
    "src/core",
    "src/gateways",
    "src/gateways/polymarket",
    "src/strategies",
    "tests"
]

for d in dirs:
    os.makedirs(d, exist_ok=True)
    with open(os.path.join(d, "__init__.py"), "w") as f:
        pass
