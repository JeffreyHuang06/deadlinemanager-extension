/*global chrome*/
import {retrieveJSONList} from './retrieveDeadlineJSON'
import {retrieveSchoolList} from './retrieveSchoolList'

import DeadlineType from '../types/deadlineType'
import SB from '../types/hashmapsb'

export async function storeSchoolStateList(ssl: SB){
    chrome.storage.sync.set({
        "schoolstatelist": ssl.getObj()
    });
}

export async function storeShowComplete(show: boolean){
    chrome.storage.sync.set({
        "showcomplete": show
    });
}

export async function storeShowDates(show: boolean){
    chrome.storage.sync.set({
        "showdates": show
    });
}

export async function storeLists(deadlinelist: DeadlineType[], schoollist: string[], schoolstatelist: SB){
    // deadlinelist = removeDupes(deadlinelist);
    // schoollist = removeDupes(schoollist);

    chrome.storage.sync.set({
        "deadlinelist": deadlinelist,
        "schoollist": schoollist,
        "schoolstatelist": schoolstatelist.getObj()
    });
}