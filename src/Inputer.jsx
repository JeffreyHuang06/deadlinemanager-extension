import React, {useState} from 'react'
import './css/Inputer.css'

export default function Inputer(props) {
    let {value, type, id} = props;
    let [text,setText] = useState('');

    function handleChange (event){
        setText(event.target.value);
    }

    return (
        <div id={id} className='Inputer'>
            <p>{value}</p>
            <input type={type} onChange={handleChange} value={text} required></input>
        </div>
    )
}
