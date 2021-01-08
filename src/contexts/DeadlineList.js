import React from 'react'
import {retrieveJSONList} from "../chromeAPI/retrieveDeadlineJSON"
import {retrieveSchoolList} from "../chromeAPI/retrieveSchoolList"

//why tf isnt top level await supported already???

export async function getContext() {
    const dlist = await retrieveJSONList();
    const slist = await retrieveSchoolList();

    return ({
        "deadlinelist": dlist,
        "schoollist": slist
    });

}

const Lists = React.createContext({});
export default Lists;
