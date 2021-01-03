import React, {useState} from 'react'
import './css/MeadDeadline.css'
import {retrieveSortedJSONList, retrieveNearestDate} from './chromeAPI/retrieveDeadlineJSON'

export default function MainDeadline() {
    // get the date and the stuff from chrome storage
    let [date, setDate] = useState("Hello");

    async function fetchData() {
        let res = await retrieveSortedJSONList();
        let nearest = await retrieveNearestDate();
        // console.log(res);

        // parse the nearest date
        let len = nearest.length;
        if (len === 1){
            // update the state
        }
    }
    function keepfetching() {
        setInterval(fetchData, 1000);
    }

    return (
        <div className="MainDeadline">
            {date}
            {keepfetching()}
        </div>
    )
}