import React from 'react'

export default function SchoolDisp(props) {
    const {school, date, showDate} = props;

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

