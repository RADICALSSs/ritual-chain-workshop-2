import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readFileSync } from "node:fs";

const source = readFileSync("contracts/RitualPredict.sol", "utf8");

describe("RitualPredict structure review", function () {
  it("includes the main prediction market lifecycle functions", function () {
    assert.match(source, /function createMarket/);
    assert.match(source, /function bet/);
    assert.match(source, /function onScheduledResolve/);
    assert.match(source, /function claimWinnings/);
    assert.match(source, /function claimRefund/);
  });

  it("keeps the autonomous resolution components visible", function () {
    assert.match(source, /SCHEDULER/);
    assert.match(source, /HTTP_PRECOMPILE/);
    assert.match(source, /JQ_PRECOMPILE/);
    assert.match(source, /ITEEServiceRegistry|TEEServiceRegistry/);
  });

  it("documents retry and invalid-market behavior", function () {
    assert.match(source, /MAX_ATTEMPTS/);
    assert.match(source, /Resolving/);
    assert.match(source, /Resolved/);
    assert.match(source, /Invalid/);
  });

  it("uses block numbers for market timing instead of timestamps", function () {
    assert.equal(source.includes("block.timestamp"), false);
    assert.match(source, /block.number/);
  });
});
