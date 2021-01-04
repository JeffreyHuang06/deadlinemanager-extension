/*global chrome*/
export function retrieveSchoolList(){
    return new Promise(resolve => {
        chrome.storage.sync.get(['schoollist'], res => {
            resolve(res.schoollist);
        });
    });
}

// returns true if its not in the list else false
export async function checkList(schoolname){
    let res = await retrieveSchoolList();

    return res.find(element => element === schoolname) === undefined;
}