import React from 'react';
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummary.css'

const checkoutSummary =(props)=>{

    return (
        <div className={classes.CheckoutSummary}>
            <h1 className ={classes.Text}>Thanks for ordering!</h1>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div className ={classes.Text}>
                <Button  btnType = 'Danger'
                clicked>Cancel</Button>
                <Button  btnType = 'Success'
                clicked>Continue</Button>
            </div>

        </div>
    )

}
export default checkoutSummary