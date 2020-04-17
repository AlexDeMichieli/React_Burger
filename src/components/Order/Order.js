import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from '../../axios-orders'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: "20px",
    },
    margin: {
    margin: '30px 0'
    },
  }));

const Order = (props) => {
    const classes = useStyles();
    const [ingredients, setIngredients]=useState({ingredients: {} })
    useEffect(()=> {

      axios.get('/orders.json')
      .then(res =>{
        let keys = Object.values(res.data)
        console.log(keys)
        if (keys == null){
          setIngredients({ingredients: 'void'})  
        } 
        for (let obj in keys)
        setIngredients(keys[obj].ingredients)

      })
    }, [])


    return(
        <Container maxWidth="sm" >
            <Paper elevation={2} className = {[classes.root, classes.margin].join(" ")}>
              <p>Ingredients: Salad(1)</p>
              <p>Price : <strong>USD 4.5</strong></p>
            </Paper>
        </Container>
    )
}

export default Order