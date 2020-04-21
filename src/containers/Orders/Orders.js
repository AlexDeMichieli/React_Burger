import Order from '../../components/Order/Order'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from '../../axios-orders'

const Orders = (props) => {
   
    const [order, setOrder]= useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        axios.get('/orders.json')
            .then(res => {
                const myOrders = []
                let keys = Object.values(res.data)
                
                for (let ingredients in Object.entries(keys)){
                    myOrders.push(Object.values(keys)[ingredients].ingredients)
                }

                setOrder(myOrders);
                setIsLoading(false)
            })

            .catch(err => {
                setIsLoading(false);
            });
    }, [])
    
        return (
            <div>
                {Object.values(order).map((order, number) => (
                    <Order 
                        key={number}
                        ingredients={order}
                    />
                ))}
            </div>
        );
}

export default Orders;