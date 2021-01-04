import React, {useState} from 'react'
import './css/MeadDeadline.css'
import {retrieveSortedJSONList, retrieveNearestDate} from './chromeAPI/retrieveDeadlineJSON'

export default function MainDeadline() {
    // get the date and the stuff from chrome storage
    let [school, setSchool] = useState("");
    let [date, setDate] = useState("");

    async function fetchData() {
        let res = await retrieveSortedJSONList();
        let nearest = await retrieveNearestDate();

        // parse the nearest date
        let len = nearest.length;
        if (len === 1){
            setSchool(nearest[0].school);
            setDate(nearest[0].date);
        }

        // console.log(res); // temporary
    }
    function keepfetching() {
        setInterval(fetchData, 1000);
    }

    return (
        <>
            <div className="MainDeadline">
                <div className='school'>{school}</div>
                <div classNmae='date'>{date}</div>
            </div>

            {keepfetching()}
        </>
    )
}