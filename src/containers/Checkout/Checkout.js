import React, { Component } from 'react';

//components
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

//css
import Classes from './Checkout.css';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 1
            }
        }
    }

    render() {
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}/>
            </div>
        );
    }
}

export default Checkout;

