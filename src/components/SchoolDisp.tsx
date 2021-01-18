import React, {useState, useEffect} from 'react'

import {useRecoilState} from 'recoil'
import SchoolStateList from '../states/schoolstatelistAtom'
import SB from '../types/hashmapsb'

interface Props {
    school: string;
    date: string;
    showDate: boolean;
    showComplete: boolean;
}

const SchoolDisp: React.FC<Props> = ({school, date, showDate, showComplete}) => {
    // add some css so that these two are horizontal

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
    }, [schoolstatelist]);

    return (
        <div className='SchoolDisp'>
            <p className="dispschool">{school}</p>

            {
                showDate ? <p className="dispdate">{date}</p> : null
            }

            {
                showComplete ? <button className="dispcomplete" onClick={toggleComplete}>{schoolstatestring}</button> : null
            }
        </div>
    )
}

export default SchoolDisp;