import React, { useState, useEffect } from 'react';
import {withRouter, Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData'
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
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

const Checkout = (props) => {
    
    const [ingredients, setIngredients] = useState({ ingredients : {} })
    const [price, setPrice] = useState({totalPrice: ''})

    const classes = useStyles();
    
    useEffect(() => {
            //gets props from burgerbuilder history ==> console.log('From Checkout',this.props, this.props.location.state.ingredients, this.props.location.state.price)
            //getting props from history is better than queryparams. Less work
            
            const query = new URLSearchParams(props.location.search)
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
            setPrice({totalPrice: price})
            setIngredients({ingredients: ingredients})
    }, []);


    const checkoutCancelledHandler = () =>{
        props.history.goBack();
    }

    const checkoutContinuedHandler =()=>{
        props.history.push({
            pathname: '/checkout/contact-data',
            state: {ingredients: ingredients.ingredients, price: price.totalPrice}
        })
    }

        return ( 
                <div>
                    <CheckoutSummary 
                        ingredients = {ingredients.ingredients}
                        checkoutCancelled={checkoutCancelledHandler}
                        checkoutContinued={checkoutContinuedHandler}
                    />   
                    <div style = {{backgroundColor: 'red'}}>                                                  
                        <Route path ={props.match.path + '/contact-data'}  render = {()=> (<ContactData ingredients ={ingredients.ingredients} price = {price.totalPrice}/>)} />
                        {/* //you ca pass props inside brackets and pass props = {...props} in the component instead of withrouter */}
                    </div> 
                </div>  
                                          
         );
}
 
export default withRouter(Checkout);