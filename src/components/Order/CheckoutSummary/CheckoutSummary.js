import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
import {withRouter} from 'react-router-dom'

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    OrderButton : {

      backgroundColor: "#DED29E",
      outline: "none",
      cursor: "pointer",
      border: "1px solid #966909",
      color: "white",
      fontFamily: 'inherit',
      fontSize: "1.2em",
      padding: "15px 30px",
      boxShadow: "2px 2px 2px #966909",
    },
  });


const checkoutSummary =(props)=>{

//   const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


    console.log('from summary', props.location.state )

    let checkoutMessage = ''
    if (props.location.state === undefined){
        checkoutMessage = (<h1 className ={classes.Text} >Please Add Ingredients!</h1>)
    }
    else {
        checkoutMessage = (<h1 className ={classes.Text} > Ready to Pay?</h1>)
    }
    
    return (
        <div className={classes.CheckoutSummary}>
            {checkoutMessage}
             <Burger ingredients={props.ingredients}/>
            
            {props.location.state ? 
                (<div className ={classes.Text} style ={{backgroundColor: "red", flex: "1"}}>
                    <Button  btnType = 'Danger'
                        clicked ={props.checkoutCancelled}>Cancel
                    </Button>
                    <Button  btnType = 'Success'
                        clicked={props.checkoutContinued}>Continue
                    </Button>
                </div> ) : ''}
        </div>
    )

}
export default withRouter(checkoutSummary)