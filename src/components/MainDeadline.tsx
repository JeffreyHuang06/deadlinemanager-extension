import React, {useState, useEffect} from 'react'
import '../css/MainDeadline.css'
import MainOne from './MainOne'

import {useRecoilValue} from 'recoil'
import NearestDate from '../states/nearestdate'
import ShowComplete from '../states/showcompleteAtom'

const MainDeadline: React.FC = () => {
    // get the date and the stuff from chrome storage
    const schooldates = useRecoilValue<string[][]>(NearestDate);
    const showComplete = useRecoilValue<boolean>(ShowComplete);
    const [autos, setAutos] = useState<string>("");

    //dynamically render the style

    useEffect(() => {
        const siz: number = Math.ceil(Math.sqrt(schooldates.length));
        const autostring: string = "auto ".repeat(siz);

        setAutos(autostring);

    }, [schooldates]);

    // NOTE: add the ability to show completeness on the MainOne, therefore many the showComplete an atom

    return (
        <div className="MainDeadline">
            <style jsx>{`
                .MainDeadline {
                    display: grid;
                    grid-template-columns: ${autos}
                }
            `}</style>

            {
                schooldates.map(([school, date]) => (
                    <MainOne school={school} date={date} showComplete={showComplete} />
                ))
            }
        </div>
    )
}

export default MainDeadline;