import React, {useState, useEffect} from 'react'

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
    const [schoolstatestring, setSchoolStateString] = useState("");

    const toggleComplete = () => {
        const schoolstatelistU: SB = schoolstatelist.clone();
        schoolstatelistU.s(school, !schoolstatelist._(school));
        setSchoolStateList(schoolstatelistU);
    }

    useEffect(() => {
        setSchoolStateString(schoolstatelist._(school) ? "Completed" : "Uncompleted");

    //eslint-disable-next-line
    }, [schoolstatelist])


    return (
        <>
            <div className="MainOne">
                <div>{school}</div>
                <div>{date}</div>

                {
                    showComplete ? <button onClick={toggleComplete}>{schoolstatestring}</button> : null
                }
            </div>
        </>
    )
}

export default MainOne;
