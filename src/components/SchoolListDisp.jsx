import React, {useState} from 'react'
import SchoolDisp from './SchoolDisp'

import {useRecoilValue} from 'recoil'
import SortedDeadlineList from '../states/sorteddeadlinelist'

// this component can either show or not show dates
export default function SchoolListDisp (){
    const sorteddeadlinelist = useRecoilValue(SortedDeadlineList);
    const [showDates, setShowDates] = useState(false);

    return (
        <div className='SchoolListDisp'>
            {
                sorteddeadlinelist.map(({school, date}) => (
                    <SchoolDisp school={school} date={date} showDate={showDates}/>
                ))
            }
            <button onClick={() => {setShowDates(!showDates)}}>Toggle Dates</button>
        </div>
    );
}

