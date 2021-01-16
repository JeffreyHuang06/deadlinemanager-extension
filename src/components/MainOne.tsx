import React from 'react'

interface Props {
    school: string;
    date: string
}

const MainOne: React.FC<Props> = ({school, date}) => {
    return (
        <>
            <div className="MainOne">
                <div>{school}</div>
                <div>{date}</div>
            </div>
        </>
    )
}

export default MainOne;
