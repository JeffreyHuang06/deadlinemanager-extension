/*global chrome*/
export function retrieveJSONList() {
    return new Promise(resolve => {
        chrome.storage.sync.get(['deadlinelist'], res => {
            resolve(res.deadlinelist);
        });
    });
}

export async function retrieveSortedJSONList() {
    let retrievedJSONList = await retrieveJSONList();
    
    retrievedJSONList.sort((a,b) => {
        let adate = new Date(a.date);
        let bdate = new Date(b.date);
        return bdate.getTime() - adate.getTime() < 0 ? 1 : -1;
    });

    return retrievedJSONList;
}

export async function retrieveNearestDate(){
    let rJL = await retrieveSortedJSONList();
    let len = rJL.length;

    if (len === 0 || len === 1){
        return rJL;
    } else {

        // get the smallest date
        let smoldate = rJL[0].date;
        let retlist = [rJL[0]];

        for (var i=1; i<len; i++){
            if (rJL[i].date === smoldate) retlist.push(rJL[i]);
            else break;
        }

        return retlist;
    }
}