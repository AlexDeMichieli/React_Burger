import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'
import {withRouter} from 'react-router-dom'


const checkoutSummary =(props)=>{


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
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className ={classes.Text}>
                <Button  btnType = 'Danger'
                    clicked ={props.checkoutCancelled}>Cancel
                    </Button>
                <Button  btnType = 'Success'
                    clicked={props.checkoutContinued}>Continue
                    </Button>
            </div>

        </div>
    )

}
export default withRouter(checkoutSummary)