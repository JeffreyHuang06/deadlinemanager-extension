import React from 'react'
import Inputer from './Inputer'
import './css/InputForm.css'

export default function InputForm() {
    return (
        <form className='InputForm'>
            <Inputer id='inputname' value='School Name' type='text' />
            <Inputer id='inputdate' value='Deadline Date' type='date' />
            <Inputer id='inputsubmit' value='Submit' type='submit' />
        </form>
    )
}