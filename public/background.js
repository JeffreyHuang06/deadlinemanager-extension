/*global chrome*/
// key : deadlinelist
// value: another json with key:value => place:deadline

// there will only be one chrome storage

chrome.runtime.onInstalled.addListener(function() {
    let ddlist_temp_obj = [
        {
            "school": "Exeter",
            "date": (new Date(2021,0,15)).toString()
        },
        {
            "school": "Andover",
            "date": (new Date(2021,1,1)).toString()
        },// {
        //     "school": "dummy school",
        //     "date": (new Date(2021,0,15)).toString()
        // }
    ];

    let ddlistnames_temp_obj = [
        "Exeter",
        "Andover"
    ];

    // yes I know this architecture and system for storing is terrible but ill fix it later

    chrome.storage.sync.set({deadlinelist: ddlist_temp_obj}, () => {
        console.log("Successfully instantiated deadlinelist");
        console.log(ddlist_temp_obj);
    });

    chrome.storage.sync.set({schoollist: ddlistnames_temp_obj}, () => {
        console.log("Successfully instantiated deadlinelistnames");
        console.log(ddlistnames_temp_obj);
    });
});

