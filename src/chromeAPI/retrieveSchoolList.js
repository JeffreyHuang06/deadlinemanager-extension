/*global chrome*/
export function retrieveSchoolList(){
    return new Promise(resolve => {
        chrome.storage.sync.get(['schoollist'], res => {
            resolve(res.schoollist);
        });
    });
}

