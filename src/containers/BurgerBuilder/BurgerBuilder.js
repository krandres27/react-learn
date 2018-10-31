import React, { Component } from 'react';
import axiosInstance from '../../axios-orders';
import { connect } from 'react-redux';

//constants
import * as burgerBuilderActions from '../../store/actions/';

//components
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//UI
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

//HO
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            purchasing: false
        }

        //bindings
        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
    };

    componentDidMount() {
        this.props.onInitiIngredients();
    }

    updatePurchaseState(ingredients) {
        let numberOfIngredients = Object.keys(ingredients).reduce( (prev, ingredient) => {
            return prev + ingredients[ingredient];
        }, 0);

        return numberOfIngredients > 0;
    }

    purchaseHandler() {
        this.setState({purchasing: true});
    }
    
    purchaseCancelHandler() {
        this.setState({purchasing: false});
    }
    
    purchaseContinueHandler() {
        this.props.history.push('/checkout');
    }

    render() {
        let burgerBuilderContent = <Spinner />

        if(this.props.ingredients) { 
            const disabledInfo = {...this.props.ingredients};
            
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0; 
            } 

            burgerBuilderContent = (
                <>
                    <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                        <OrderSummary 
                            ingredients={this.props.ingredients} 
                            price={this.props.totalPrice}
                            purchaseCancel={this.purchaseCancelHandler}
                            purchaseContinue={this.purchaseContinueHandler}/> :
                    </Modal>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls 
                        addIngredient={this.props.onIngredientAdded} 
                        removeIngredient={this.props.onIngredientRemoved} 
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        purchasable={this.updatePurchaseState(this.props.ingredients)}
                        order={this.purchaseHandler}/>
                </>
            );
        }

        return burgerBuilderContent;
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch(burgerBuilderActions.addIngredient(ingredientName)),
        onIngredientRemoved: (ingredientName) => dispatch(burgerBuilderActions.removeIngredient(ingredientName)),
        onInitiIngredients: () => dispatch(burgerBuilderActions.initIngredients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosInstance));