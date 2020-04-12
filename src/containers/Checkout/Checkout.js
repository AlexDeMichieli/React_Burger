import React, { Component } from 'react';
import {Route} from "react-router-dom";
import {withRouter} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData'


class Checkout extends Component {

    constructor(props) {
        super(props) 

        this.state = { 
            ingredients :{},
            totalPrice: ''
         }
        
    }
    componentDidMount(){
            //gets props from burgerbuilder history ==> console.log('From Checkout',this.props, this.props.location.state.ingredients, this.props.location.state.price)
            //getting props from history is better than queryparams. Less work
            
            const query = new URLSearchParams(this.props.location.search)
            const ingredients = {}
            let price = 0;
            // const arrayFromMap = []
            // const objectWithIngredients = {}
            // const mappedIngredients = new Map()
            for (let param of query.entries()) {
                //slow solution
                // let key = param[0]
                // let value = param[1]
                //     mappedIngredients.set(key, +value)
                    // arrayFromMap.push([key, +value])
                if (param[0]==='price'){
                    price = param[1]
                }else {
                    ingredients[param[0]] = +param[1];
                }
            }

            //     slow solution
            // for (let key in arrayFromMap)
            //     objectWithIngredients[arrayFromMap[key][0]] = +arrayFromMap[key][1]
            // console.log(objectWithIngredients)


            //can save state from location.state instead of queryParams. It's easier
            this.setState({ingredients: ingredients, totalPrice: price})
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
                    <Route path ={this.props.match.path + '/contact-data'}  render = {()=> (<ContactData ingredients ={this.state.ingredients} price = {this.state.totalPrice}/>)} />
                </div>                                                    //you ca pass props inside brackets and pass props = {...props} in the component instead of withrouter
         );
    }
}
 
export default withRouter(Checkout);