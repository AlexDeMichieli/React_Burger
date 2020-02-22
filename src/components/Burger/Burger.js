import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {

    return (
        <div>
            <BurgerIngredient type ='bread-bottom' />
            {/* <BurgerIngredient type ='cheese' />
            <BurgerIngredient type ='meat' />
            <BurgerIngredient type ='bread-bottom' /> */}
        </div>
    )
}

export default burger;