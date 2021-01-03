import React from 'react'
import Inputer from './Inputer'
import './css/InputForm.css'
import './css/Inputer.css'

export default function InputForm() {
    return (
        <form className='InputForm'>
            <h3>Enter New School</h3>
            <Inputer id='inputname' value='School Name' type='text' />
            <Inputer id='inputdate' value='Deadline Date' type='date' />


            <div id='inputsubmit' className='Inputer'>
                <p style={{"textAlign": "center"}} className='inputerp'>Submit</p>
                <input type='submit' required></input>
            </div>
        </form>
    )
}