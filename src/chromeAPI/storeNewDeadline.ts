/*global chrome*/
import {retrieveJSONList} from './retrieveDeadlineJSON'
import {retrieveSchoolList} from './retrieveSchoolList'

import DeadlineType from '../types/deadlineType'

export async function storeNewDeadline(school: string, date: string){
    // first we need to get it
    // then we push back
    // then we do the thing
    let retrievedDeadlineList = await retrieveJSONList();
    retrievedDeadlineList.push({
        "school": school,
        "date": date
    });

    let retrievedSchoolList = await retrieveSchoolList();
    retrievedSchoolList.push(school);
    
    //@ts-ignore
    chrome.storage.sync.set({
        "deadlinelist": retrievedDeadlineList,
        "schoollist": retrievedSchoolList
    });
}

export async function storeLists(deadlinelist: DeadlineType[], schoollist: string[]){
    // deadlinelist = removeDupes(deadlinelist);
    // schoollist = removeDupes(schoollist);

    chrome.storage.sync.set({
        "deadlinelist": deadlinelist,
        "schoollist": schoollist
    });
}