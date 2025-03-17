// Fetch all open tabs and display them
chrome.tabs.query({}, (tabs) => {
    const tabList = document.getElementById("tab-list");
    tabs.forEach((tab) => {
      const tabItem = document.createElement("div");
      tabItem.textContent = tab.title;
      tabList.appendChild(tabItem);
    });
  });