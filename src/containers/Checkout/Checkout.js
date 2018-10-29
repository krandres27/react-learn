import React, { Component } from 'react';

//components
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

//css
import Classes from './Checkout.css';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {}
        }

        this.onCheckoutCanceled = this.onCheckoutCanceled.bind(this);
        this.onCheckoutContinued = this.onCheckoutContinued.bind(this);
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        
        for(let param of query.entries()) {
            // query.entries = ['key', 'value']}
            ingredients[param[0]] = parseInt(param[1]);
        }

        this.setState({
            ingredients: ingredients
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
            </div>
        );
    }
}

export default Checkout;

