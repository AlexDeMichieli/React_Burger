import React from 'react'
import classes from './Modal.css'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

  
const modal = (props) => {

  console.log('props from modal', props)

  const background = useStyles();
  const [open, setOpen] = React.useState(true);


    return (

        <div 
            className ={classes.Modal}
            style ={{ tranform: props.show ? 'translateY(10)' : "translateY(-100vh)",
            opacity: props.show ? '1' : '0'}}
            >
            {props.children}
            <button className = {classes.buttonmodal} onClick = {props.modalClosed}>Close</button>
           
            {props.show ? <Backdrop open={open} onClick={props.modalClosed}>
            </Backdrop>  : " "}     
       </div>


    )
}

export default modal;