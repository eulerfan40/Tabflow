// Fetch all open tabs and display them in the overlay
async function fetchAndDisplayTabs() {
    const tabs = await chrome.tabs.query({});
    const allTabsList = document.getElementById('all-tabs-list');
    allTabsList.innerHTML = '';
  
    tabs.forEach((tab) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" id="tab-${tab.id}" data-tab-id="${tab.id}">
        <img src="${tab.favIconUrl}" alt="Favicon" width="16" height="16">
        <span>${tab.title}</span>
      `;
      allTabsList.appendChild(li);
    });
  }
  
  // Close the overlay
  document.getElementById('close-button').addEventListener('click', () => {
    window.close();
  });
  
  // Cancel button (same as close button)
  document.getElementById('cancel-button').addEventListener('click', () => {
    window.close();
  });
  
  // Initialize the overlay
  fetchAndDisplayTabs();