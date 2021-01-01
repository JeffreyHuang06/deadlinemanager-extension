// let chrome = require("chrome"); // just so the linter doesn't freak out on me

// key : deadlinelist
// value: another json with key:value => place:deadline

// there will only be one chrome storage

chrome.runtime.onInstalled.addListener(function() {

    chrome.storage.sync.set({deadlinelist: {}}, () => {
        console.log("Successfully instantiated deadlinelist");
    });
});

