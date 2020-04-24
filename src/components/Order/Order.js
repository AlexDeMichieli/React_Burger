import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


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
  const [custInfo, setCustInfo] = useState([])
  const [custAddress, setCustAddress] = useState([])
  const [price, setPrice] = useState([])

  const ingredients = Object.entries(props.ingredients.ingredients).map(item => {
      return (<p key={item}>{item[0]} : {item[1]}</p> )
  })

  useEffect(()=>{

    const getInfos = () => {

      let infoAddress = []
      let infoNameEmail = []
      let price = []

      for (let key in props.ingredients.customer.address)
        infoAddress.push(props.ingredients.customer.address[key])
      
      for (let key in props.ingredients )
      infoNameEmail.push(props.ingredients[key].email, props.ingredients[key].name )

      for (let key in props )
      price.push(props.ingredients.price)

      setCustInfo(infoNameEmail)
      setCustAddress(infoAddress)
      setPrice(price)

    }
    getInfos()
  },[])

  const address = custAddress.map((el, item)=> {
    return <p key={item}>{el}</p>
  })

  const infos = custInfo.map((item, el)=> {
    return <p key={el}>{item}</p>

  })

  const totalCost = price.map((item, el)=> {
    return <p key={el}>{item}</p>

  })

    return (
    <Container maxWidth="sm" >
       <Paper elevation={2} className = {[classes.root, classes.margin].join(" ")}>
         <h3>Ingredients:</h3>
            {ingredients}
         <h3>Address:</h3>
            {address}
         <h3>Customer Details:</h3>
            {infos}
         <h3>Price : <strong>{totalCost}</strong></h3>
       </Paper>
   </Container>
    );
};

export default order;