import React from 'react';
import Burger from '../../Burger/Burger'
import styles from './CheckoutSummary.css'
import {withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ButtonUI from '@material-ui/core/Button';


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    bar: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "350px",
    },
    button: {
      backgroundColor: "rgb(161, 201, 241)", 
      width: "120px",
      height: "90px",
      color: "white",
      display: 'block',
      margin: 'auto',
      marginTop: '-110px',
   },
   buttonCancel: {
        backgroundColor: "#f50057", 
        width: "120px",
        height: "50px",
        color: "white",
        marginLeft: '50px',
        marginBottom: '50px',
 },
    buttonContinue:{
        backgroundColor: "rgb(161, 201, 241)", 
        width: "120px",
        height: "50px",
        color: "white",
        marginLeft: '50px',
        marginBottom: '50px',

    }
    
  });

  

const checkoutSummary =(props)=>{


  

    const classes = useStyles();

    console.log('from summary', props.location.state )

    let checkoutMessage = ''
    if (props.location.state === undefined){
        checkoutMessage = (<h1 className ={styles.Text} >Your Burger is Empty!</h1>)
    }
    else {
        checkoutMessage = (<h1 className ={styles.Text} > Ready to Pay?</h1>)
    }
    
    return (
        <div className={styles.CheckoutSummary} 
        style={{height: '100vh', backgroundColor: 'antiquewhite', overflow: 'scroll'}}
        >
            {checkoutMessage}
            <Burger ingredients={props.ingredients}/>
    
            {props.location.state ? 
                (
                    <div className ={classes.bar}>
                    <ButtonUI  className = {classes.buttonCancel} variant="contained" color="secondary"
                        onClick ={props.checkoutCancelled}>Cancel
                    </ButtonUI>
                    <ButtonUI className = {classes.buttonContinue} variant="contained" color="primary"
                        onClick={props.checkoutContinued}>Continue
                    </ButtonUI>
                </div> 
                ) :  <ButtonUI className={classes.button} variant="contained" color="primary"
                        onClick={()=>props.history.push('/')}>Back to Home
                    </ButtonUI>
            }
        </div>

    )

}
export default withRouter(checkoutSummary)