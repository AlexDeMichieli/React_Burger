import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


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