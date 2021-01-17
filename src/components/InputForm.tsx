import React, {useState} from 'react'
import '../css/InputForm.css'
import checkList from '../utils/checkList'
import checkDate from '../utils/checkDate'
import {storeLists} from '../chromeAPI/storeNewDeadline'

import DeadlineType from '../types/deadlineType'

import {useRecoilState} from 'recoil'
import DeadlineList from '../states/deadlinelistAtom'
import SchoolList from '../states/schoollistAtom'

const InputForm: React.FC = () => {
    const [inputschool, setInputSchool] = useState<string>('');
    const [inputdate, setInputDate] = useState<string>('');
    const [invalidschool, setInvalidSchool] = useState<boolean>(false);
    const [invaliddate, setInvalidDate] = useState<boolean>(false);
    const [badschool, setBadSchool] = useState<string>('');
    const [baddate, setBadDate] = useState<string>('');

    const [schoollist, setSchoolList] = useRecoilState<string[]>(SchoolList);
    const [deadlinelist, setDeadlineList] = useRecoilState<DeadlineType[]>(DeadlineList);

    const validateForm = (): boolean => {
        // check to make sure its not in the list
        const valschool: boolean = checkList(schoollist, inputschool);
        if (!valschool){
            setInvalidSchool(true);
            setBadSchool(inputschool);
        } else {
            setInvalidSchool(false);
            setBadSchool("");
        }
        // check to make sure the date hasnt been reached yet
        const valdate: boolean = checkDate(inputdate);
        if (!valdate){ // add MSIN1DAY becauase the day value is 0 indexed so conflicts with Date() and date input
            setInvalidDate(true);
            setBadDate(inputdate);
        }
        else {
            setInvalidDate(false);
            setBadDate("");
        }

        return valschool && valdate; // want both to be valid
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // validate the form
        if (validateForm()) {

            // change schoollist state
            let slist: string[] = schoollist.slice();
            slist.push(inputschool);
            setSchoolList(slist);

            // change deadlinelist state
            let dlist: DeadlineType[] = deadlinelist.slice();
            dlist.push({
                "school": inputschool,
                "date": inputdate
            });

            setDeadlineList(dlist);

            storeLists(dlist, slist); // turn this into a selector
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, fieldname: string) => {
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

export default InputForm;