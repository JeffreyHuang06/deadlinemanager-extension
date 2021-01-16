export function retrieveSchoolList(): Promise<string[]> {
    return new Promise<string[]>(resolve => {
        chrome.storage.sync.get(['schoollist'], res => {
            resolve(res.schoollist);
        });
    });
}

