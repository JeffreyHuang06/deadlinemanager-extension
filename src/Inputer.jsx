import React from 'react'
import './css/Inputer.css'

export default function Inputer(props) {
    let {value, type, id} = props;
    
    let inputblock = <input type={type}></input>;
    if (type === 'submit'){
        inputblock = <input type={type} value=""></input>;
    }

    return (
        <div id={id} className='Inputer'>
            <p style={{"textAlign": "center"}} className='inputerp'>{value}</p>
            {inputblock}
        </div>
    )
}
