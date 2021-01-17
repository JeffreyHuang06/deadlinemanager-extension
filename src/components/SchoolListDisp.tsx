import React, {useState} from 'react'
import SchoolDisp from './SchoolDisp'

import DeadlineType from '../types/deadlineType'

import {useRecoilValue, useRecoilState} from 'recoil'
import SortedDeadlineList from '../states/sorteddeadlinelist'
import ShowComplete from '../states/showcompleteAtom'

// this component can either show or not show dates
const SchoolListDisp: React.FC = () => {
    const sorteddeadlinelist = useRecoilValue<DeadlineType[]>(SortedDeadlineList);
    const [showDates, setShowDates] = useState<boolean>(false);
    const [showComplete, setShowComplete] = useRecoilState<boolean>(ShowComplete);

    const toggleDates = () => {
        setShowDates(!showDates);
    }

    const toggleComplete = () => {
        setShowComplete(!showComplete);
    }

    return (
        <div className='SchoolListDisp'>
            <button onClick={toggleDates}>Toggle Dates</button>
            <button onClick={toggleComplete}>Toggle Complete</button>

            {
                sorteddeadlinelist.map(({school, date}) => (
                    <SchoolDisp school={school} date={date} showDate={showDates} showComplete={showComplete}/>
                ))
            }

        </div>
    );
}

export default SchoolListDisp;