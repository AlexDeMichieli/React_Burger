import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {

    salad: 0.5,
    cheese: 1.5,
    bacon: 2,
    meat: 2.5,

}



class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
    }

    updatePurchaseState(ingredients){

        const sum = Object.values(ingredients)
        let total = 0
        for (let i = 0; i< sum.length; i++ ){
            total += sum[i]
        }
        this.setState({purchasable: total > 0})
        
    }

    purchaseHandler =() => {
        this.setState({purchasing: true})
    }


    addIngredientHandler = (type) => {

        //takes care of total number of ingredients per type
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = Object.assign({}, this.state.ingredients)
        updatedIngredients[type] = updatedCount

        //takes care of total price

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        console.log(this.state.purchasable, this.state.ingredients)

        this.updatePurchaseState(updatedIngredients)

    }

    removeIngredientHandler =(type)=> {

        const oldCount = this.state.ingredients[type]
        if (oldCount<=0){
            return
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = Object.assign({}, this.state.ingredients)
              updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        console.log(this.state.purchasable,  this.state.ingredients)

        this.updatePurchaseState(updatedIngredients)
    }

    purchaseCancelHandler = () =>{

        this.setState({purchasing:false});
    }
    
    disableButton = () =>{

        let switcher = '';
        const ingredients = [...this.state.ingredients] 
        if (ingredients.lenght >=1 ){
            switcher = true;
        } else {
            switcher = false
        }
        return switcher
    }

    purchaseContinueHandler = () =>{
        alert("Please Continue")
    }

    render () {

        // const disableButton = Object.assign({}, this.state.ingredients)
        // for (let number in disableButton){
        //     disableButton[number] = disableButton[number] <=0
        // }


        return (
            // <Aux>
            <div style ={{overflow:'scroll'}}>
                <Modal show={this.state.purchasing} modalClosed ={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients = {this.state.ingredients}
                        purchaseCanceled ={this.purchaseCancelHandler}
                        purchaseContinued = {this.purchaseContinueHandler}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded= {this.addIngredientHandler}
                    ingredientRemoved ={this.removeIngredientHandler}
                    disabled={this.disableButton()}
                    price = {this.state.totalPrice}
                    purchasable ={this.state.purchasable}
                    ordered = {this.purchaseHandler}
                />
            </div>
            // </Aux>
        );
    }
}

export default BurgerBuilder;