chrome.action.onClicked.addListener((tab) => {
    const apiURL = 'https://slack-status.com/';
    chrome.tabs.create({ url: apiURL });
});