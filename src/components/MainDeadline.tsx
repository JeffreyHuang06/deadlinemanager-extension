import React, {useState, useEffect} from 'react'
import '../css/MainDeadline.css'
import MainOne from './MainOne'

import {useRecoilValue} from 'recoil'
import NearestDate from '../states/nearestdate'

const MainDeadline: React.FC = () => {
    // get the date and the stuff from chrome storage
    const schooldates = useRecoilValue<string[][]>(NearestDate);
    const [autos, setAutos] = useState<string>("");

    //dynamically render the style

    useEffect(() => {
        const siz: number = Math.round(Math.sqrt(schooldates.length));
        const autostring: string = "auto ".repeat(siz);

        setAutos(autostring);

    }, [schooldates]);

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
                    <MainOne school={school} date={date} />
                ))
            }
        </div>
    )
}

export default MainDeadline;