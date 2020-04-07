import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import axios from '../../axios-orders'
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder' 

// const gettingState = (props) => {
//   console.log(props.history)
//     return (
//         <div>wef</div>
//     )

// }
// export default gettingState


class Checkout extends Component {

    constructor(props) {
        super(props) 

        this.state = { 
            ingredients :{
            salad: 2,
            meat: 1,
            cheese: 1,
            bacon: 1,
            }
         }
        
    }
    componentDidMount(){

        
       
            const query = new URLSearchParams(this.props.location.search)
            const ingredients = {}
            const arrayFromMap = []
            const objectWithIngredients = {}
            const mappedIngredients = new Map()

            // console.log('CHECKOUT',this.props.location.search)

            for (let param of query.entries()) {
                //slow solution
                let key = param[0]
                let value = param[1]
                //     mappedIngredients.set(key, +value)
                    arrayFromMap.push([key, +value])
                    
                ingredients[param[0]] = +param[1];
            }
                //slow solution
            for (let key in arrayFromMap)
                objectWithIngredients[arrayFromMap[key][0]] = +arrayFromMap[key][1]
            console.log(objectWithIngredients)
                
            
           

            
        // console.log('uuu',final)
      

        // const reducedingr = Object.values(mappedIngredients).reduce((t, n) => t + n);

        //  console.log('INGREDIENTS',ingredients)
        //  console.log('INGREDIENTS',mappedIngredients)

        // this.setState({ingredients: ingredients.entries()})

    }


    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinuedHandler =()=>{
        this.props.history.replace('/checkout/contact-data')
    }
    render() { 

       
        return ( 
                <div>
                    <CheckoutSummary 
                    ingredients = {this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                    />
                </div>
         );
    }
}
 
export default Checkout;