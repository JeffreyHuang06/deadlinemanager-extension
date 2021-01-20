/*global chrome*/
// key : deadlinelist
// value: another json with key:value => place:deadline

// there will only be one chrome storage

chrome.runtime.onInstalled.addListener(function() {
    let ddlist_temp_obj = [
        {
            "school": "Exeter",
            "date": "2021-01-15"
        },
        {
            "school": "Andover",
            "date": "2021-02-01"
        }
    ];

    let ddlistnames_temp_obj = [
        "Exeter",
        "Andover"
    ];

    let ddlistbools_temp_obj = {
        "Exeter": true,
        "Andover": false
    };

    chrome.storage.sync.set({
        "deadlinelist": ddlist_temp_obj,
        "schoolist": ddlistnames_temp_obj,
        "schoolstatelist": ddlistbools_temp_obj,
        "showdates": true,
        "showcomplete": true
    });
});

