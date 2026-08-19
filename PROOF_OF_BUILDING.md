# Proof of Building — Bootcamp 2

## What I worked on

This is my fork for Bootcamp 2, focused on the self-resolving prediction market on Ritual Chain.

I reviewed the workshop repo and followed the main flow of the prediction market: a user creates a YES/NO market, other users place bets, and the market resolves by itself later without needing a manual resolver or backend cron job.

## Main flow I understood

1. A user creates a market with a question, oracle URL, jsonPath, target value, and comparator.
2. Other users bet YES or NO with native RITUAL.
3. Betting closes based on block numbers.
4. Ritual Scheduler calls the contract at the resolve block.
5. The contract reads external data through the HTTP precompile.
6. jq extracts the needed value from the oracle response.
7. The observed value is compared with the target.
8. The market resolves to YES or NO, or becomes Invalid if resolution fails after retries.
9. Winners claim payouts, and invalid markets allow refunds.

## Design details I noticed

- Deadlines are based on block numbers instead of timestamps.
- A failed oracle read is not treated as a NO result.
- Resolution has retry logic.
- The contract does not need a manual resolve button.
- Payouts are pull-based, so the contract does not loop over all bettors.
- Resolution parameters are fixed when the market is created.

## What I added in this fork

I added a small frontend mockup under the `web/` folder to show how the Ritual Predict market flow could look from a user interface perspective. It is intentionally simple and static, but it follows the same contract flow from the workshop: create market, bet, scheduled resolution, and claim/refund.
