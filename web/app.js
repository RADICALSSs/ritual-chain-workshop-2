const yesPool = document.getElementById("yesPool");
const noPool = document.getElementById("noPool");
const state = document.getElementById("state");
const statusText = document.getElementById("statusText");

let yes = 12.5;
let no = 8.2;
let resolved = false;

function render() {
  yesPool.textContent = `${yes.toFixed(1)} RITUAL`;
  noPool.textContent = `${no.toFixed(1)} RITUAL`;
}

document.getElementById("betYes").addEventListener("click", () => {
  if (resolved) return;
  yes += 1;
  statusText.textContent =
    "Added a mock YES bet. In the contract this would call bet(marketId, true) with native RITUAL.";
  render();
});

document.getElementById("betNo").addEventListener("click", () => {
  if (resolved) return;
  no += 1;
  statusText.textContent =
    "Added a mock NO bet. In the contract this would call bet(marketId, false) with native RITUAL.";
  render();
});

document.getElementById("resolve").addEventListener("click", () => {
  resolved = true;
  state.textContent = "Resolved";
  state.className = "state resolved";
  statusText.textContent =
    "Mock resolution complete. In the real workshop contract, Ritual Scheduler calls onScheduledResolve, then HTTP and jq precompiles are used to read and compare the oracle value.";
});
