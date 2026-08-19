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

In this fork I added a few small changes to show my understanding of the workshop repo:

- Added a `PROOF_OF_BUILDING.md` file to summarize the market flow and the design points I reviewed.
- Added a small static frontend mockup under the `web/` folder to show how the Ritual Predict user flow could look.
- Added `web/config.example.json` as a simple placeholder config for a future deployed contract address.
- Removed the unused `Counter.ts` test because it was not related to the RitualPredict contract.
- Added a small `RitualPredictStructure.ts` test to check the main lifecycle functions and Ritual-specific pieces like Scheduler, HTTP precompile, jq precompile, retry behavior, and invalid market states.
- Updated the main README with my Bootcamp 2 review and the changes I made.

The goal was not to claim a live deployment, since that was not required. I kept the changes focused on understanding the repo, documenting the flow, and adding a simple UI/demo layer around the prediction market

RADICAL_SS


