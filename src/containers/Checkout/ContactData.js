import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from '../../axios-orders'



const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));



const ContactData  = (props) => {

    const classes = useStyles();
    // const [loading, setLoading] = useState(false)
    // const [list, setList] = useState({  
    //         name: '',
    //         email: '',
    //         address: {
    //             street: '',
    //             postalCode: '',
    //         }
    //     })


    const orderHandler = (event) =>{
        event.preventDefault();
    //     this.setState({loading: true})
    //     const order ={
    //         ingredients : props.ingredients,
    //         price: props.totalPrice,
    //         customer : {
    //             name: 'Alex',
    //             address : {
    //                 state: 'Portland',
    //                 zipcode: '123'
    //             },
    //             email : 'myemail'
    //     } 
    // }
    //     axios.post('/orders.json', order) //json is only for firebase
    //     .then(res => {
    //         this.setState({loading:false, purchasing: false})
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         this.setState({loading:false, purchasing: false})
    //     })
    
    }

        return ( 
            <div>
             <Container fixed>
                <h4>Enter your Info</h4>

                <form className={classes.root} style={{textAlign: 'center'}} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="name" variant="outlined"/>
                    <TextField id="filled-basic" label="address" variant="outlined" />
                    <TextField id="outlined-basic" label="something else " variant="outlined" />
                    <Button
                         variant="contained"
                         color="primary"
                         style ={{display: 'block', margin: '20px auto'}}
                         onClick ={orderHandler}
                    >Send</Button>
                </form>
            </Container>
            </div>
        );
    }
 
export default ContactData;