import React, {useEffect} from 'react'
import '../css/MeadDeadline.css'

import {useRecoilValue} from 'recoil'
import NearestDate from '../states/nearestdate'

export default function MainDeadline() {
    // get the date and the stuff from chrome storage
    const {school, date} = useRecoilValue(NearestDate);

    useEffect(() => {
        console.log("effected at maindeadline");
    });

    return (
        <div className="MainDeadline">
            <div className='school'>{school}</div>
            <div className='date'>{date}</div> 
        </div>
    )
}