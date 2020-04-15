import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'



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
        loading: false,
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
   
            //we are passing the ingredients via search params as well as state. With State is easier
            const queryParams = [];
            for (let ingredients in this.state.ingredients)
                queryParams.push(encodeURI(ingredients)+ '=' + encodeURIComponent(this.state.ingredients[ingredients]))
            
            //pushing the total price as well
            queryParams.push('price=' + this.state.totalPrice)
            const queryString = queryParams.join('&')
            
            let newIngredients = Object.assign({}, this.state.ingredients)
            let newPrice = Object.assign({}, this.state)
            this.props.history.push({
                pathname: '/checkout',
                search: '?' + queryString,
                state: {ingredients: newIngredients, price: newPrice.totalPrice}
            })
    }

    render () {

        return (

           <div>
                <Modal backdrop = {this.displayBackdrop} show={this.state.purchasing} modalClosed ={this.purchaseCancelHandler}>
                        {!this.state.loading ? 
                            <OrderSummary 
                                ingredients = {this.state.ingredients}
                                price = {this.state.totalPrice}
                                purchaseCanceled ={this.purchaseCancelHandler}
                                purchaseContinued = {this.purchaseContinueHandler}
                            /> : <Spinner></Spinner>}
                </Modal>
                        <div>
                             <Burger ingredients={this.state.ingredients}/>
                        </div>
                    <div>
                        <BuildControls 
                            show = {this.state.purchasing} 
                            ingredientAdded= {this.addIngredientHandler}
                            ingredientRemoved ={this.removeIngredientHandler}
                            disabled={this.disableButton()}
                            price = {this.state.totalPrice}
                            purchasable ={this.state.purchasable}
                            ordered = {this.purchaseHandler}
                        /> 
                    </div>
            </div>
        );
    }
}

export default BurgerBuilder;