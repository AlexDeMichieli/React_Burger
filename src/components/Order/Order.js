import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ButtonUI from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  margin: {
  margin: '30px 0'
  },
}));


const order = ( props ) => {

  const classes = useStyles();

  const ingredients = Object.entries(props.ingredients.ingredients).map(item => {
      return (<p key={item}><i>{item[0]} : {item[1]}</i></p> )
  })


    return (
    <Container maxWidth="sm">
        <Paper elevation={2} className = {[classes.root, classes.margin].join(" ")}>
         <h3>Ingredients:</h3>
            {ingredients}
            <h3>Name:</h3>
            {props.ingredients.customer.name}
          <h3>Email Address:</h3>
            {props.ingredients.customer.address}
         <h3>Additional information:</h3>
            {props.ingredients.customer.info} 
         <h3>Price : <strong>{props.ingredients.price}</strong></h3>
         <ButtonUI onClick ={props.clicked} variant="contained" color="secondary">Delete Order</ButtonUI>
       </Paper>
   </Container>
    );
};

export default order;