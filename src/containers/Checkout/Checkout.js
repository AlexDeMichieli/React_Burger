import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import axios from '../../axios-orders'
import ContactData from './ContactData'


class Checkout extends Component {

    constructor(props) {
        super(props) 

        this.state = { 
            ingredients :{
            salad: 2,
            meat: 1,
            cheese: 1,
            bacon: 1,
            },
            totalPrice: ''
         }
        
    }
    componentDidMount(){
            console.log('From Checkout',this.props)
            const query = new URLSearchParams(this.props.location.search)
            const ingredients = {}
            const arrayFromMap = []
            const objectWithIngredients = {}
            const mappedIngredients = new Map()
            for (let param of query.entries()) {
                //slow solution
                // let key = param[0]
                // let value = param[1]
                //     mappedIngredients.set(key, +value)
                    // arrayFromMap.push([key, +value])
                    
                ingredients[param[0]] = +param[1];
            }
                slow solution
            for (let key in arrayFromMap)
                objectWithIngredients[arrayFromMap[key][0]] = +arrayFromMap[key][1]
            console.log(objectWithIngredients)

            this.setState({ingredients: ingredients})

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
                    <Route path ={this.props.match.path + '/contact-data'}  render = {()=> (<ContactData ingredients ={this.state.ingredients}/>)} />
                </div>
         );
    }
}
 
export default Checkout;