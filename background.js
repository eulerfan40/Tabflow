// Listen for the keyboard shortcut to open the overlay
chrome.commands.onCommand.addListener((command) => {
    if (command === 'open-overlay') {
      chrome.tabs.create({ url: 'overlay.html' });
    }
  });