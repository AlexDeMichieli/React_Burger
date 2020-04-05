import React from 'react';

import classes from './BuildControl.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const buildControl = (props) => {
    return (

        <div className ={classes.BuildControl}>
            <div className ={classes.Label}>
                {props.label}
        
                <Button variant="contained" className ={classes.Less} onClick={props.removed}>Less</Button>
                <Button variant="contained" className ={classes.More} onClick={props.added}>More</Button>
          
            </div>
        </div>

    )

}

export default buildControl