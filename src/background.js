chrome.commands.onCommand.addListener((command) => {
    switch (command) {
      case "open-gui":
        // Open the custom extension webpage
        chrome.windows.create({
          url: chrome.runtime.getURL("web/index.html"),
          type: "popup",
          width: 800,
          height: 600
        });
        break;
  
      case "move-tab-to-new-window":
        // Move the current tab to a new window
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0];
          chrome.windows.create({ tabId: tab.id });
        });
        break;
  
      case "duplicate-tab":
        // Duplicate the current tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0];
          chrome.tabs.duplicate(tab.id);
        });
        break;
  
      case "duplicate-tab-to-new-window":
        // Duplicate the current tab into a new window
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0];
          chrome.tabs.duplicate(tab.id, (duplicatedTab) => {
            chrome.windows.create({ tabId: duplicatedTab.id });
          });
        });
        break;
  
      default:
        console.log("Unknown command:", command);
    }
  });

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.action) {
      case "move-tab-to-new-window":
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0];
          chrome.windows.create({ tabId: tab.id });
        });
        break;
  
      case "duplicate-tab":
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0];
          chrome.tabs.duplicate(tab.id);
        });
        break;
  
      case "duplicate-tab-to-new-window":
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          const tab = tabs[0];
          chrome.tabs.duplicate(tab.id, (duplicatedTab) => {
            chrome.windows.create({ tabId: duplicatedTab.id });
          });
        });
        break;
  
      case "open-gui":
        chrome.windows.create({
          url: chrome.runtime.getURL("web/index.html"),
          type: "popup",
          width: 800,
          height: 600
        });
        break;
  
      default:
        console.log("Unknown action:", message.action);
    }
  });
  