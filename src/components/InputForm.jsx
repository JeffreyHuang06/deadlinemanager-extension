import React, {useState} from 'react'
import '../css/InputForm.css'
import checkList from '../utils/checkList'
import checkDate from '../utils/checkDate'
import {storeLists} from '../chromeAPI/storeNewDeadline'

import {useRecoilState} from 'recoil'
import DeadlineList from '../atoms/deadlinelist'
import SchoolList from '../atoms/schoollist'

export default function InputForm () {
    const [inputschool, setInputSchool] = useState('');
    const [inputdate, setInputDate] = useState('');
    const [invalidschool, setInvalidSchool] = useState(false);
    const [invaliddate, setInvalidDate] = useState(false);
    const [badschool, setBadSchool] = useState('');
    const [baddate, setBadDate] = useState('');

    const [schoollist, setSchoolList] = useRecoilState(SchoolList);
    const [deadlinelist, setDeadlineList] = useRecoilState(DeadlineList);

    const validateForm = () => {
        // check to make sure its not in the list
        const valschool = checkList(schoollist, inputschool);
        if (!valschool){
            setInvalidSchool(true);
            setBadSchool(inputschool);
        } else {
            setInvalidSchool(false);
            setBadSchool("");
        }
        // check to make sure the date hasnt been reached yet
        const valdate = checkDate(inputdate);
        if (!valdate){ // add MSIN1DAY becauase the day value is 0 indexed so conflicts with Date() and date input
            setInvalidDate(true);
            setBadDate(inputdate);
        }
        else {
            setInvalidDate(false);
            setBadDate("");
        }

        return !invalidschool && !invaliddate; // want both to be valid
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        
        // validate the form
        if (validateForm()){
            console.log(deadlinelist, schoollist, "before");
            // change schoollist state
            let slist = schoollist;
            slist.push(inputschool);
            setSchoolList(slist);

            // change deadlinelist state
            let dlist = deadlinelist;
            dlist.push({
                "school": inputschool,
                "date": inputdate
            });
            setDeadlineList(dlist);

            console.log(deadlinelist, schoollist, " mid");
            storeLists(deadlinelist, schoollist);

            console.log(deadlinelist, schoollist, "after");
        }
    }

    const handleChange = (event, fieldname) => {
        switch (fieldname) {
            case "inputschool":
                setInputSchool(event.target.value);
                break;
            
            case "inputdate":
                setInputDate(event.target.value);
                break;
            
            default:
                break;
        }
    }

    return (
        <form className='InputForm' onSubmit={handleSubmit}>
            <h3>Enter New School</h3>

            <div id='inputname' className='Inputer'>
                <p>School Name</p>
                <input 
                    type='text'
                    onChange={e => {handleChange(e, 'inputschool')}}
                    value={inputschool}
                    required 
                />
                {invalidschool ? <p>{badschool} is already registered</p> : null}
            </div>

            <div id='inputdate' className='Inputer'>
                <p>Deadline Date</p>
                <input
                    type='date'
                    onChange={e => {handleChange(e, 'inputdate')}}
                    value={inputdate}
                    required
                />
                {invaliddate ? <p>{baddate} is invalid</p> : null}
            </div>

            <div id='inputsubmit' className='Inputer'>
                <p>Submit</p>
                <input type='submit' required></input>
            </div>
            
        </form>
    )
}