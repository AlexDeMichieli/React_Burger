import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    
    render () {

        let ingredient = null;

        if (this.props.type === 'bread-top'){
            return (
                ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
                    )
            )
        }

        if (this.props.type === 'salad'){
            return (
                ingredient = (

                    <div className={classes.Salad}></div>
                     )
                )
            }

        if (this.props.type === 'meat'){
            return (
                ingredient = (
    
                    <div className={classes.Meat}></div>
                        )
                    )
                }

        if (this.props.type === 'cheese'){
            return (
                ingredient = (
                    
                    <div className={classes.Cheese}></div>
                        )
                    )
                }
        if (this.props.type === 'bacon'){
            return (
                ingredient = (
                    
                    <div className={classes.Bacon}></div>
                            )
                        )
                    }

        if (this.props.type === 'bread-bottom'){
            return (
               ingredient = <div className={classes.BreadBottom}></div>
            )
        }


        //Using switch type ==>

        // let ingredient = null;

        // switch ( this.props.type ) {
        //     case ( 'bread-bottom' ):
        //         ingredient = <div className={classes.BreadBottom}></div>;
        //         break;
        //     case ( 'bread-top' ):
        //         ingredient = (
        //             <div className={classes.BreadTop}>
        //                 <div className={classes.Seeds1}></div>
        //                 <div className={classes.Seeds2}></div>
        //             </div>
        //         );
        //         break;
        //     case ( 'meat' ):
        //         ingredient = <div className={classes.Meat}>meat</div>;
        //         break;
        //     case ( 'cheese' ):
        //         ingredient = <div className={classes.Cheese}>cheese</div>;
        //         break;
        //     case ( 'bacon' ):
        //         ingredient = <div className={classes.Bacon}>bacon</div>;
        //         break;
        //     case ( 'salad' ):
        //         ingredient = <div className={classes.Salad}>salad</div>;
        //         break;
        //     default:
        //         ingredient = null;
        // }

        return ingredient;
    }
}



export default BurgerIngredient;