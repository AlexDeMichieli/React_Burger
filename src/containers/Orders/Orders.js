import Order from '../../components/Order/Order'
import React, { Component } from 'react';
import axios from '../../axios-orders'

// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Container from '@material-ui/core/Container';
// import axios from '../../axios-orders'

// const Orders = (props) => {


//     const [order, setOrder]= useState(null)
//     const [isLoading, setIsLoading] = useState(false);


//     useEffect(()=> {
//       async function getData(){
//         setIsLoading(true);
//         const data = await axios.get('/orders.json')
//         .then(res =>{
//             let ing = []
//             let address = []
//             let keys = res.data
//             if (keys != null){
//               console.log('we got an order')
//                 keys = Object.values(res.data)
//                 for (let ingredients in Object.entries(keys))
//                 ing.push(Object.values(keys)[ingredients].ingredients)
//               setOrder(ing)
//             }else{
//               console.log('database empty')
//             }
//           setIsLoading(false);
//       })
//     }
//     getData()
//     }, [])

//     console.log('ORDER NULL', order=== null)

//   const test = () => {
//     let ingredients
//     if (order) {
//       ingredients = Object.values(order).map(item => {
//          let ing = Object.entries(item).map(el => {
//           return (
//           <p key={el}>{el[0]} {el[1]}</p>
//           )
//       });
//       return ing
//     })
//     } else {
//         return ingredients = (<p>no ingredients</p> )
//     } 
//     return ingredients
//   }
    
//     return(
//         <div key = {order}>
//             <Order ingredients={test()}/>
//         </div>
//     )
// }

// export default Orders



class Orders extends Component {

       
        state = { 

            ingredients : [],
            loading: true,
            test: [1,2,3]

         }

         componentDidMount(){
             axios.get('/orders.json')
             .then(res=>{
                 let fetchedOrders =[]
                 for(let key in res.data){
                    fetchedOrders.push({ fetchedOrders: res.data[key], id: key})
                 }
                 this.setState({ingredients: fetchedOrders, loading: false})
             })
         }

    render() { 
        console.log(this.state.ingredients)

        return ( 
            <div>
            
            <Order></Order>    
           
       
               
            </div>
         );
    }
}
 
export default Orders;