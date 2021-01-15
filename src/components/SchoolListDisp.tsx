import React, {useState} from 'react'
import SchoolDisp from './SchoolDisp'

import DeadlineType from '../types/deadlineType'

import {useRecoilValue} from 'recoil'
import SortedDeadlineList from '../states/sorteddeadlinelist'

// this component can either show or not show dates
const SchoolListDisp: React.FC = () => {
    const sorteddeadlinelist = useRecoilValue<DeadlineType[]>(SortedDeadlineList);
    const [showDates, setShowDates] = useState<boolean>(false);

    const toggle = () => {
        setShowDates(!showDates);
    }

    return (
        <div className='SchoolListDisp'>
            <button onClick={toggle}>Toggle Dates</button>

            {
                sorteddeadlinelist.map(({school, date}) => (
                    <SchoolDisp school={school} date={date} showDate={showDates}/>
                ))
            }
        </div>
    );
}

export default SchoolListDisp;