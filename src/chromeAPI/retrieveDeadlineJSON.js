/*global chrome*/
export function retrieveJSONList() {
    return new Promise(resolve => {
        chrome.storage.sync.get(['deadlinelist'], res => {
            resolve(res.deadlinelist);
        });
    });
}

export function sortJSONList(list) {
    if (list.length === 0) return list;

    list.sort((a,b) => {
        let adate = new Date(a.date);
        let bdate = new Date(b.date);
        return bdate.getTime() - adate.getTime() < 0 ? 1 : -1;
    });

    return list;
}

export async function retrieveSortedJSONList() {
    return sortJSONList(await retrieveJSONList());
}

export function getNearestDate(list){
    list = sortJSONList(list);
    let len = list.length;

    if (len === 0 || len === 1){
        return list;
    } else {

        // get the smallest date
        let smoldate = list[0].date;
        let retlist = [list[0]];

        for (var i=1; i<len; i++){
            if (list[i].date === smoldate) retlist.push(list[i]);
            else break;
        }

        return retlist;
    }
}

