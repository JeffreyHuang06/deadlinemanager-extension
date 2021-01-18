import SB from '../types/hashmapsb'

export function retrieveSchoolStateList(): Promise<SB> {
    return new Promise<SB>(resolve => {
        chrome.storage.sync.get(['schoolstatelist'], res => {
            const ret = new SB(res.schoolstatelist);
            resolve(ret);
        });
    });
};
