import React from 'react';
import SubmitButton from './SubmitButton';
import TextBox from './TextBox';

const AddTree = () => {
    return (
     <div>
        <h1 className='headline'>Add New Tree</h1>
        <div className='Input'>
            <div id='rectangle'></div>
            <div >
            <p>Name</p>
            <div className='idk'>
            <TextBox inside='Your Plant Name'/>
            </div>
            <div>
            <p>Date</p>
            <TextBox inside='Date'/>
            </div>
            <div>
            <p>Humidity</p>
            <TextBox inside='Humidity'/>
            </div>
            <p>Light</p>
            <TextBox inside='Light'/>
            </div>
        </div>
        <p className="Line"> _______________________________________________________________________________________</p>
        <SubmitButton/>
     </div>
    )
}

export default AddTree