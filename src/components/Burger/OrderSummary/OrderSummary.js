import React from 'react';

const orderSummary =(props)=> {

    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        console.log(props.ingredients[igKey])
        return (
            <li key= {igKey}>
            {igKey}:<span style ={{textTransform: 'capitalize'}}>{props.ingredients[igKey]}</span>
            </li>
        )
    })

    return(


        <div>
            <h3>Your Order</h3>
            <p>A delicours burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </div>

    )
}

export default orderSummary