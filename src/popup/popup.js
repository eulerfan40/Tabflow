document.getElementById("move-tab-to-new-window").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "move-tab-to-new-window" });
  });
  
  document.getElementById("duplicate-tab").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "duplicate-tab" });
  });
  
  document.getElementById("duplicate-tab-to-new-window").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "duplicate-tab-to-new-window" });
  });