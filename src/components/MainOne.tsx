import React, {useState, useEffect} from 'react'

import {storeSchoolStateList} from '../chromeAPI/storeNewDeadline'
import SB from '../types/hashmapsb'

import {useRecoilState} from 'recoil'
import SchoolStateList from '../states/schoolstatelistAtom'

interface Props {
    school: string;
    date: string;
    showComplete: boolean;
}

const MainOne: React.FC<Props> = ({school, date, showComplete}) => {
    const [schoolstatelist, setSchoolStateList] = useRecoilState<SB>(SchoolStateList);
    const [isComplete, setIsComplete] = useState<string>("");
    const [schoolstatestring, setSchoolStateString] = useState("");

    const toggleComplete = () => {
        const schoolstatelistU: SB = schoolstatelist.clone();
        schoolstatelistU.s(school, !schoolstatelist._(school));
        setSchoolStateList(schoolstatelistU);

        // need a func that updates the chrome storage
        storeSchoolStateList(schoolstatelistU);
    }

    useEffect(() => {
        const complete = schoolstatelist._(school) 
        setSchoolStateString(complete ? "Completed" : "Uncompleted");
        setIsComplete(complete ? "#6ee96e" : "#ff4141")

    //eslint-disable-next-line
    }, [schoolstatelist])


    return (
        <>
            <div className="MainOne" style={{background: isComplete}}>
                <div className='MainOne--school'>{school}</div>
                <div className='MainOne--date'>{date}</div>

                {
                    showComplete ? <div className='MainOne--button'><button onClick={toggleComplete}>{schoolstatestring}</button></div> : null
                }
            </div>
        </>
    )
}

export default MainOne;
