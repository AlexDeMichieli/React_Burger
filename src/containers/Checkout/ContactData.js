import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'



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
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState({  
            name: '',
            email: '',
            address: {
                street: '',
                postalCode: '',
            }
        })
    const [purchasing, setPurchasing] = useState(false)


    const orderHandler = (event) =>{
        event.preventDefault();
        setLoading(true)
        const order ={
            ingredients : props.ingredients,
            price: props.price,
            customer : {
                name: 'Alex',
                address : {
                    state: 'Portland',
                    zipcode: '123'
                },
                email : 'myemail'
            }    
        }
        console.log(order)
        axios.post('/orders.json', order) //json is only for firebase
             .then(res => {
               setLoading(true)
               setPurchasing(true)
               console.log(res)
          })
             .catch(err => {
                setLoading(false)
                setPurchasing(false)
          })
    }

        return ( 
            <div>
            {/* {loading ? <Spinner : <div></div> } */}

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