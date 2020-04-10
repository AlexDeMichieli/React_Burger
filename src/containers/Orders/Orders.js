import React from 'react';
import {withRouter} from 'react-router-dom'


import Order from '../../components/Order/Order'

const Orders = (props) => {
    console.log('from Orders',props)

    return(
        <div>
            <Order/>
            <Order/>
        </div>
    )
}

export default withRouter(Orders)