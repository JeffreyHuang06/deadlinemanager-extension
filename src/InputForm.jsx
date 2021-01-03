import React from 'react'
import './css/InputForm.css'

export default class InputForm extends React.Component {
    state = {
        inputschool: "",
        inputdate: ""
    }

    onSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    handleChange = (event, fieldname) => {
        this.setState({[fieldname]: event.target.value});
    }

    render() {
        return (
            <form className='InputForm' onSubmit={this.onSubmit}>
                <h3>Enter New School</h3>

                <div id='inputname' className='Inputer'>
                    <p>School Name</p>
                    <input 
                        type='text'
                        onChange={e => {this.handleChange(e, 'inputschool')}}
                        value={this.state.inputschool}
                        required 
                    />
                </div>

                <div id='inputdate' className='Inputer'>
                    <p>Deadline Date</p>
                    <input
                        type='date'
                        onChange={e => {this.handleChange(e, 'inputdate')}}
                        value={this.state.inputdate}
                        required
                    />
                </div>

                <div id='inputsubmit' className='Inputer'>
                    <p>Submit</p>
                    <input type='submit' required></input>
                </div>
                
            </form>
        )
    }
}