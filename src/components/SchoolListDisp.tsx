import React from 'react'
import '../css/SchoolListDisp.scss'
import SchoolDisp from './SchoolDisp'

import {storeShowComplete, storeShowDates} from '../chromeAPI/storeNewDeadline'

import DeadlineType from '../types/deadlineType'

import {useRecoilValue, useRecoilState} from 'recoil'
import SortedDeadlineList from '../states/sorteddeadlinelist'
import ShowComplete from '../states/showcompleteAtom'
import ShowDates from '../states/showdateAtom'

// this component can either show or not show dates
const SchoolListDisp: React.FC = () => {
    const sorteddeadlinelist = useRecoilValue<DeadlineType[]>(SortedDeadlineList);
    const [showDates, setShowDates] = useRecoilState<boolean>(ShowDates);
    const [showComplete, setShowComplete] = useRecoilState<boolean>(ShowComplete);

    const toggleDates = () => {
        const cacheClosure: boolean = showDates;
        setShowDates(!showDates);
        storeShowDates(!cacheClosure);
    }

    const toggleComplete = () => {
        const cacheClosure: boolean = showComplete;
        setShowComplete(!showComplete);
        storeShowComplete(!cacheClosure);
    }

    return (
        <div className="container">
            <div className='SchoolListDisp'>
                <button onClick={toggleDates}>Toggle Dates</button>
                <button onClick={toggleComplete}>Toggle Complete</button>

                {
                    sorteddeadlinelist.map(({school, date}) => (
                        <SchoolDisp school={school} date={date} showDate={showDates} showComplete={showComplete}/>
                    ))
                }

            </div>
        </div>
    );
}

export default SchoolListDisp;