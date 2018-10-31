import React, { Component } from 'react';
import { connect } from 'react-redux';
import axiosInstance from '../../axios-orders';
import * as actions from '../../store/actions/'

//hoc
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

//components
import Order from './Order/Order';

//ui
import Spinner from '../../components/UI/Spinner/Spinner';

//css
import Classes from './Orders.css';

class Orders extends Component {
    
    componentDidMount() {
        this.props.onFetchOrders();
    }

    render() {
        
        const orders = this.props.orders.map( (order, i) => {
            return <Order key={order.id} customer={order.orderData.name} price={order.price} ingredients={order.ingredients}/>
        });

        return(
            <div className={Classes.Orders}>
                { this.props.loading ? <Spinner /> 
                :  this.props.orders.length > 0 ? orders : <p style={{textAlign: 'center'}}>There are no orders right now!</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axiosInstance));