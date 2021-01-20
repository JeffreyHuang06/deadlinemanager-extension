/*global chrome*/
// key : deadlinelist
// value: another json with key:value => place:deadline

// there will only be one chrome storage

chrome.runtime.onInstalled.addListener(function() {

    chrome.storage.sync.set({
        "deadlinelist": [],
        "schoolist": [],
        "schoolstatelist": {},
        "showdates": true,
        "showcomplete": true
    });
});

