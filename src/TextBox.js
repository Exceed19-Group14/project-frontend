import React from "react";
import './TextBox.css';

function TextBox({inside}) {
    return (
        <input className='TextBox' type='text' placeholder={inside}></input>
    )
}

export default TextBox