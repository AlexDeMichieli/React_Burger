import React from 'react';
import TextField from '@material-ui/core/TextField';


const input = (props) => {

    let inputElement = null;
    switch (props.inputType) {

        case('input'):
            inputElement = <input {...props}/>
            break;
        case('textarea'):
            inputElement = <textarea {...props}/>
            break;
        default:
            inputElement = <input  {...props}/>

    }

    return (
            <div>
                <label>{props.label}</label>
                {inputElement}
            </div>
    )

}

export default input