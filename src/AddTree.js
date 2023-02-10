import React from 'react'

const AddTree = () => {
    return (
     <div>
        <div className='Input'>
            <div id='rectangle'></div>
            <div >
            <p>Name</p>
            <div className='idk'>
            <input className='Txt' type='text' placeholder='Your Plant Name'></input>
            </div>
            <div>
            <p>Date</p>
            <input className='Txt' type='text' placeholder='Date'></input>
            </div>
            <div>
            <p>Humidity</p>
            <input className='Txt' type='text' placeholder='Humidity'></input>
            </div>
            <p>Light</p>
            <input className='Txt' type='text' placeholder='Light'></input>
            </div>
        </div>
        <p className="Line"> _______________________________________________________________________________________</p>
      <button className='SubmitButton' type="Button">Submit</button>
     </div>
    )
}

export default AddTree