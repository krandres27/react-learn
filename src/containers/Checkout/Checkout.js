import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//components
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

//css
import Classes from './Checkout.css';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {},
            totalPrice: 0
        }

        this.onCheckoutCanceled = this.onCheckoutCanceled.bind(this);
        this.onCheckoutContinued = this.onCheckoutContinued.bind(this);
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        
        for(let param of query.entries()) {
            // query.entries = ['key', 'value']}
            if(param[0] !== 'price') {
                ingredients[param[0]] = parseInt(param[1]);
            } else {
                price = param[1];
            }
        }

        this.setState({
            ingredients: ingredients,
            totalPrice: price
        });

    }

    onCheckoutCanceled() {
        this.props.history.goBack();
    }
    
    onCheckoutContinued() {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return(
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    onCheckoutCanceled={this.onCheckoutCanceled}
                    onCheckoutContinued={this.onCheckoutContinued}/>
                    <Route 
                        exact 
                        path={`${this.props.match.path}/contact-data`} 
                        render={(props) => <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props} />}/>
            </div>
        );
    }
}

export default Checkout;

