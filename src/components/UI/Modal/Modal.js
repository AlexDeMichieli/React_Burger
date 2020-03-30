import React from 'react';

import classes from './Modal.css'

const modal = (props) => {

    return (
        <div 
            className ={classes.Modal}
            style ={{ tranform: props.show ? 'translateY(0)' : "translateY(-100vh)",
            opacity: props.show ? '1' : '0'}}
            >
            {props.children}
            <button className = {classes.buttonmodal} onClick = {props.modalClosed}>X</button>
        </div>

    )
}

export default modal;