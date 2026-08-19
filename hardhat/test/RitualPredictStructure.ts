import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { readFileSync } from "node:fs";

const contractSource = readFileSync("contracts/RitualPredict.sol", "utf8");
const ritualSource = readFileSync("contracts/ritual/RitualChain.sol", "utf8");
const source = `${contractSource}\n${ritualSource}`;

describe("RitualPredict structure review", function () {
  it("includes the main prediction market lifecycle functions", function () {
    assert.match(contractSource, /function createMarket/);
    assert.match(contractSource, /function bet/);
    assert.match(contractSource, /function onScheduledResolve/);
    assert.match(contractSource, /function claimWinnings/);
    assert.match(contractSource, /function claimRefund/);
  });

  it("keeps the autonomous resolution components visible", function () {
    assert.match(source, /SCHEDULER/);
    assert.match(source, /HTTP_PRECOMPILE/);
    assert.match(source, /JQ_PRECOMPILE/);
    assert.match(source, /ITEEServiceRegistry|TEEServiceRegistry/);
  });

  it("documents retry and invalid-market behavior", function () {
    assert.match(contractSource, /MAX_ATTEMPTS/);
    assert.match(contractSource, /Resolving/);
    assert.match(contractSource, /Resolved/);
    assert.match(contractSource, /Invalid/);
  });

  it("uses block numbers for market timing instead of timestamps", function () {
    assert.equal(contractSource.includes("block.timestamp"), false);
    assert.match(contractSource, /block.number/);
  });
});
