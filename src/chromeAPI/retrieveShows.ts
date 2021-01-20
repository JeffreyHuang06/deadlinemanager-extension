export function retrieveShowDates(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        chrome.storage.sync.get(['showdates'], res => {
            resolve(res.showdates);
        });
    });
}

export function retrieveShowComplete(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        chrome.storage.sync.get(['showcomplete'], res => {
            resolve(res.showcomplete);
        });
    });
}