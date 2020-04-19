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
    const [order, setOrder]= useState(null)
    const [isLoading, setIsLoading] = useState(false);


    useEffect(()=> {
      async function getData(){
        setIsLoading(true);
        const data = await axios.get('/orders.json')
        .then(res =>{
            let ing = []
            let address = []
            let keys = res.data
            if (keys != null){
              console.log('we got an order')
                keys = Object.values(res.data)
                for (let ingredients in Object.entries(keys))
                ing.push(Object.values(keys)[ingredients].ingredients)
              setOrder(ing)
            }else{
              console.log('database empty')
            }
          setIsLoading(false);
      })
    }
    getData()
    }, [])

    console.log('ORDER NULL', order=== null)

  const test = () => {
    let ingredients
    if (order) {
      ingredients = Object.values(order).map(item => {
         let ing = Object.entries(item).map(el => {
          return (
          <p key={el}>{el[0]} {el[1]}</p>
          )
      });
      return ing
    })
    } else {
        return ingredients = (<p>no ingredients</p> )
    } 
    return ingredients
  }


    return(
        <Container maxWidth="sm" >
          
           {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Container maxWidth="sm" >
            <Paper elevation={2} className = {[classes.root, classes.margin].join(" ")}>
              <p>Ingredients:</p>
              {test()}
              <p>Price : <strong>USD 4.5</strong></p>
            </Paper>
        </Container>
       
      )}


        </Container>
    )
}

export default Order