export function retrieveSchoolStateList(){
    return new Promise(resolve => {
        chrome.storage.sync.get(['schoolstatelist'], res => {
            resolve(res.schoolstatelist);
        });
    });
};
