import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

//components
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

//css
import Classes from './Checkout.css';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.onCheckoutCanceled = this.onCheckoutCanceled.bind(this);
        this.onCheckoutContinued = this.onCheckoutContinued.bind(this);
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
                    ingredients={this.props.ingredients}
                    onCheckoutCanceled={this.onCheckoutCanceled}
                    onCheckoutContinued={this.onCheckoutContinued}/>
                    <Route 
                        exact 
                        path={`${this.props.match.path}/contact-data`} 
                        component={ContactData}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);

