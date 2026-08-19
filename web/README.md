# Ritual Predict Frontend Mockup

This folder contains a small static frontend mockup for the Bootcamp 2 prediction market.

It is not a full production frontend. The goal is to show the user flow from the workshop:

1. Create a prediction market
2. Bet YES or NO
3. Wait for scheduled resolution
4. Read oracle data through Ritual infrastructure
5. Resolve the market or allow refunds

## Why I added this

The workshop repo explains the contract flow well, but I wanted to add a simple UI layer to make the flow easier to understand visually.

The mock buttons do not send real transactions. They only represent the actions that would map to the contract functions:

- `bet(marketId, true)`
- `bet(marketId, false)`
- `onScheduledResolve(...)`
- `claimWinnings(...)`
- `claimRefund(...)`

## Notes

Since the chain was not available for deployment during the submission window, this frontend stays as a static demo instead of claiming a live deployment.
