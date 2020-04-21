import React from 'react';
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

  const ingredients = Object.entries(props.ingredients).map(item => {
      return (<p key={item}>{item[0]}</p> )
  })


    return (
    <Container maxWidth="sm" >
       <Paper elevation={2} className = {[classes.root, classes.margin].join(" ")}>
         <h3>Ingredients:</h3>
         {ingredients}
         <span>Price : <strong>USD 4.5</strong></span>
       </Paper>
   </Container>
    );
};

export default order;