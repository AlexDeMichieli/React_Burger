import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import {withRouter} from 'react-router-dom'
// import Input from '../../components/UI/Input/Input'




const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },

      form: {
        backgroundColor: "azure",
        width: "350px",
        marginLeft: "8px",
        position: "absolute", 
        alignItems: 'center',
      }
    },
  }));



const ContactData  = (props) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [info, setInfo] = useState()
    const [purchasing, setPurchasing] = useState(false)

    console.log('from contact data', name, address, info)


    const orderHandler = (event) =>{
        event.preventDefault();
        setLoading(true)
        // const test = new FormData();
        // test.append("name", name);
        // test.append("address", address);
        // test.append("info", info);

        // const order ={
        //     ingredients : props.ingredients,
        //     price: props.price,
        //     customer : {
        //         name: 'Alex',
        //         address : {
        //             state: 'Portland',
        //             zipcode: '123'
        //         },
        //         email : 'myemail'
        //     }    
        // }
        const order ={
            ingredients : props.ingredients,
            price: props.price,
            customer : {
                name: name,
                address :address,
                info : info,
            }    
        }
        // console.log(order)

        // for (let [name, value] of order) {
        //     console.log(`${name} : ${value}`);
        //   }
        axios.post('/orders.json', order) //json is only for firebase
             .then(res => {
               setLoading(false)
               setPurchasing(false)
               console.log(res)
               props.history.push('/')

          })
             .catch(err => {
                setLoading(true)
                setPurchasing(true)
          })  
    }


        return ( 
            <div>
            {!loading ?(

             <Container style={{position: "absolute", alignItems: 'center',top: "550px", marginLeft: "20px", backgroundColor: "azure", width: "300px"}}>
                <form onSubmit={orderHandler} className={classes.root} style={{textAlign: 'center',  display: 'flex', flexDirection: 'column'}} autoComplete="off">
                    <h4 >Enter your Info</h4>
                    <TextField onChange={(e)=> setName(e.target.value)}id="standard-basic" label="Name" variant="outlined"/>
                    <TextField onChange={(e)=> setAddress(e.target.value)} required id="filled-basic" label=" Email Address" variant="outlined" />
                    <TextField onChange={(e)=> setInfo(e.target.value)} id="outlined-basic" label="Additional information" variant="outlined" />
                    <Button
                         variant="contained"
                         color="primary"
                         type="submit" value="Submit"
                    >Send</Button>
                </form>

            </Container> ) : 
            <Container style={{position: "absolute", alignItems: 'center',top: "550px", marginLeft: "20px", backgroundColor: "azure", width: "300px"}}>
                <Spinner/> 
            </Container> }
            
            </div> 
        );
    }
 
export default withRouter(ContactData);
//wrapping this with to allow history, since it's a subcomponent in the checkout page, doesn't have history