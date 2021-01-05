import React, {useState} from 'react'
import '../css/MeadDeadline.css'
import {retrieveNearestDate} from '../chromeAPI/retrieveDeadlineJSON'

export default function MainDeadline() {
    // get the date and the stuff from chrome storage
    const [school, setSchool] = useState("");
    const [date, setDate] = useState("");

    function updateState(nearest) {
        const len = nearest.length;
        if (len === 0){
            setSchool("No schools registered");
            setDate("");

        } else if (len === 1){
            setSchool(nearest[0].school);
            setDate(nearest[0].date);
            
        } else {
            // we need to render a lot of stuff
        }
    }

    async function fetchData() {
        let nearest = await retrieveNearestDate();
        
        updateState(nearest); 
    };

    function keepfetching(){
        setInterval(fetchData, 1500);
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