import React, {useState, useEffect} from 'react'
import '../css/MeadDeadline.css'
import {getNearestDate} from '../chromeAPI/retrieveDeadlineJSON'

import DeadlineList from '../atoms/deadlinelist'
import SchoolList from '../atoms/schoollist'
import {useRecoilState} from 'recoil'

export default function MainDeadline() {
    // get the date and the stuff from chrome storage
    const [school, setSchool] = useState("");
    const [date, setDate] = useState("");
    const [deadlinelist, setDeadlineList] = useRecoilState(DeadlineList);
    const [schoollist, setSchoolList] = useRecoilState(SchoolList);

    useEffect(() => {
        console.log(deadlinelist, "effected maindeadline");
        const nearest = getNearestDate(deadlinelist);
        const len = nearest.length;

        if (len === 0){
            setSchool("No schools registered");
            setDate("");

        } else if (len === 1){
            setSchool(nearest[0].school);
            setDate(nearest[0].date);
            
        } else {
            // we need to render a lot of stuff
            console.log("error");
        }

    }, [deadlinelist, schoollist]);

    useEffect(() => {
        console.log("effecttee d");
    });

    return (
        <>
            <div className="MainDeadline">
                <div className='school'>{school}</div>
                <div className='date'>{date}</div>
            </div>
        </>
    )
}