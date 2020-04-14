import React from 'react';
import classes from './Burger.css';
// import {withRouter} from 'react-router-dom'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    // console.log(props)
 let values = Object.values(props.ingredients)
        let keys = Object.keys(props.ingredients)
        let ingList = []
        let i = 0


        for (i; i < values[0]; i++) {
            ingList.push(keys[0])
        }

        for (i; i < values[0]+values[1]; i++) {
            ingList.push(keys[1])
        }

        for (i; i < (values[0]+values[1]+values[2]); i++) {
            ingList.push(keys[2])
         }


        for (i; i < (values[0]+values[1]+values[2]+values[3]); i++) {
            ingList.push(keys[3])
        }
        
        let ingredientsList = ingList.map((item, index) => {
            return <BurgerIngredient type={item} key ={index} />;
        })

        if (ingredientsList.length ===0) {
            
            ingredientsList = <p>Add ingredients!</p>
            
        }




    //alternative ==>
    // let transformedIngredients = Object.keys( props.ingredients )
    //     .map( igKey => {
            
    //         let testing = [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
    //           console.log(igKey )
    //             return <BurgerIngredient key={igKey + i} type={igKey} />;
    //         } );
    //         return testing
    //     } )

        // .reduce((arr, el) => {
        //     return arr.concat(el)
        // }, []);
    // if (transformedIngredients.length === 0) {
    //     transformedIngredients = <p>Please start adding ingredients!</p>;
    // }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {/* {transformedIngredients} */}
            {ingredientsList}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

// export default withRouter( burger);
export default  burger;