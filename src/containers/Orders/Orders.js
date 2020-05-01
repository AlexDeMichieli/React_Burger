import Order from '../../components/Order/Order'
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import axios from '../../axios-orders'

// const Orders = (props) => {
   
//     const [order, setOrder]= useState('')
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(()=> {
//         axios.get('/orders.json')
//             .then(res => {
//                 const myOrders = []
//                 let keys = Object.values(res.data)
//                 for (let orderDeatils in Object.entries(keys)){
//                     console.log(Object.values(keys)[orderDeatils])
//                     myOrders.push(Object.values(keys)[orderDeatils])
//                 }

//                 setOrder(myOrders);
//                 setIsLoading(false)
//             })

//             .catch(err => {
//                 setIsLoading(false);
//             });
//     }, [])

//     const deleteOrder = (index, number) => {
//         // console.log(index, number)
//         console.log(order[index])

//         // let splitArray = [...order]
//         // let removeArticle = splitArray.splice(number, 1)
//         // setOrder(splitArray)
//       }
    
//         return (
//             <div>
//                 {Object.values(order).map((index, number) => (
//                     <Order
//                         clicked ={() => deleteOrder(number)}
//                         values = {index,number}
//                         key={number}
//                         ingredients={index}
//                     />
//                 ))}
//             </div>
//         );
// }

// export default Orders;


const Orders = (props) => {
   
    const [order, setOrder]= useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=> {
        axios.get('/orders.json')
            .then(res => {
                const myOrders = []
                console.log(res.data)
                let keys = res.data
                for (let orderDeatils in keys){
                    myOrders.push({id: orderDeatils, order: keys[orderDeatils]})
                }

                setOrder(myOrders);
                setIsLoading(false)
            })

            .catch(err => {
                setIsLoading(false);
            });
    }, [])

    

    const deleteOrder = (index, number) => {

        let id = index.id
        console.log(id, number)
        let splitArray = [...order]
        axios.delete(
            `/orders/${id}.json`
        )
        let removeArticle = splitArray.splice(number, 1)
        setOrder(splitArray)

      }

   
        return (
            <div>
                {Object.values(order).map((index, number) => (
                    <Order
                        clicked ={() => deleteOrder(index, number)}
                        values = {index,number}
                        key={number}
                        ingredients={index.order}
                    />
                ))}
            </div>
        );
}

export default Orders;