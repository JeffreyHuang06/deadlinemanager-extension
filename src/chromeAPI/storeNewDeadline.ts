/*global chrome*/
import {retrieveJSONList} from './retrieveDeadlineJSON'

export async function storeNewDeadline(school: string, date: string){
    // first we need to get it
    // then we push back
    // then we do the thing
    let res = await retrieveJSONList();
    res.push({
        "school": school,
        "date": date
    });
    
    //@ts-ignore
    chrome.storage.sync.set({
        "deadlinelist": res
    });
}