import React from 'react'

import {useRecoilState} from 'recoil'
import SchoolStateList from '../states/schoolstatelistAtom'

interface Props {
    school: string;
    date: string;
    showDate: boolean;
    showComplete: boolean
}

const SchoolDisp: React.FC<Props> = ({school, date, showDate, showComplete}) => {
    // add some css so that these two are horizontal

    const [schoolstatelist, setSchoolStateList] = useRecoilState<any>(SchoolStateList);
    const showCompleteString = schoolstatelist[school] ? "true" : "false";

    return (
        <div className='SchoolDisp'>
            <p className="dispschool">{school}</p>

            {
                showDate ? <p className="dispdate">{date}</p> : null
            }

            {
                showComplete ? <p className="dispcomplete">{showCompleteString}</p> : null
            }
        </div>
    )
}

export default SchoolDisp;