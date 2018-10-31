import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//components
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

import * as actions from '../../store/actions';

//css
import Classes from './Checkout.css';

class Checkout extends Component {
    constructor(props) {
        super(props);

        this.onCheckoutCanceled = this.onCheckoutCanceled.bind(this);
        this.onCheckoutContinued = this.onCheckoutContinued.bind(this);
    }

    componentWillMount() {
        this.props.onPurchaseInit();
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.purchased) {
            this.props.history.replace('/');
        }
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
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseInit: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

