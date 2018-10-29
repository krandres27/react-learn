import React, { Component } from 'react';
import axiosInstance from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

//components
import Order from './Order/Order';

//css
import Classes from './Orders.css';

class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        }
    }
    
    componentDidMount() {
        axiosInstance.get('/orders.json')
            .then( res => {
                const fetchedOrders = [];
                for(let key in res.data) {
                    fetchedOrders.push({...res.data[key], id:key});
                }
                this.setState({ orders: fetchedOrders });
            }).catch( err => {
                console.log(err);
            });
    }

    render() {
        console.log(this.state.orders)
        const orders = this.state.orders.map( (order, i) => {
            return <Order key={order.id} customer={order.customer} price={order.price} ingredients={order.ingredients}/>
        });

        return(
            <div className={Classes.Orders}>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axiosInstance);