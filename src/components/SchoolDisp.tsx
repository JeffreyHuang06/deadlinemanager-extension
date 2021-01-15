import React from 'react'

interface Props {
    school: string;
    date: string;
    showDate: boolean;
}

const SchoolDisp: React.FC<Props> = ({school, date, showDate}) => {
    // add some css so that these two are horizontal

    return (
        <div className='SchoolDisp'>
            <p className="dispschool">{school}</p>

            {
                showDate ? <p className="dispdate">{date}</p> : null
            }
        </div>
    )
}

export default SchoolDisp;