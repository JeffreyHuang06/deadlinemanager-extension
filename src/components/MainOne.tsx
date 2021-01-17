import React, {useState, useEffect} from 'react'

import clone from '../utils/cloneObj'

import {useRecoilState} from 'recoil'
import SchoolStateList from '../states/schoolstatelistAtom'

interface Props {
    school: string;
    date: string;
    showComplete: boolean;
}

const MainOne: React.FC<Props> = ({school, date, showComplete}) => {
    const [schoolstatelist, setSchoolStateList] = useRecoilState<any>(SchoolStateList);
    const [schoolstatestring, setSchoolStateString] = useState("");

    const toggleComplete = () => {
        let schoolstatelistU = clone(schoolstatelist);
        schoolstatelistU[school] = !schoolstatelist[school];
        setSchoolStateList(schoolstatelistU);
    }

    useEffect(() => {
        setSchoolStateString(schoolstatelist[school] ? "Completed" : "Uncompleted");

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
