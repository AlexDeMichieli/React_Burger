import React from 'react';
import Button from '../../UI/Button/Button'
import { withTheme } from '@material-ui/styles';

const orderSummary =(props)=> {


    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key= {igKey}>
            {igKey}:<span style ={{textTransform: 'capitalize'}}>{props.ingredients[igKey]}</span>
            </li>
        )
    })

    return(


        <div style ={{backgroundColor: "white", color: 'black', padding: '20px'}}>
            <h3>Your Order</h3>
            <p>A delicours burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price</h3>
            <p>${props.price}</p>
            <p>Continue to Checkout?</p>
            <Button btnType ='Danger' clicked ={props.purchaseCanceled}>Cancel</Button>
            <Button btnType ='Success' clicked ={props.purchaseContinued}>Continue</Button>
        </div>

    )
}

export default orderSummary