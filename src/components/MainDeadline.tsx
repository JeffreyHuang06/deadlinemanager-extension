import React, {useState, useEffect} from 'react'
import '../css/MainDeadline.sass'
import MainOne from './MainOne'

import {useRecoilValue} from 'recoil'
import NearestDate from '../states/nearestdate'
import ShowComplete from '../states/showcompleteAtom'

const MainDeadline: React.FC = () => {
    // get the date and the stuff from chrome storage
    const schooldates = useRecoilValue<string[][]>(NearestDate);
    const showComplete = useRecoilValue<boolean>(ShowComplete);
    const [siz, setSiz] = useState<number>(1);

    //dynamically render the style

    useEffect(() => {
        setSiz(Math.ceil(Math.sqrt(schooldates.length)));

    }, [schooldates]);

    // NOTE: add the ability to show completeness on the MainOne, therefore many the showComplete an atom

    return (
        <div className="MainDeadline">
            <style jsx>{`
                .MainDeadline {
                    display: grid;
                    grid-template-columns: ${"auto ".repeat(siz)}
                }
                .MainOne {
                    width: calc(50vw / ${siz});
                    height: calc(45vh / ${siz});
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