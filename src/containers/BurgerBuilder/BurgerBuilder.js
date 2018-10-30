import React, { Component } from 'react';
import axiosInstance from '../../axios-orders';
import { connect } from 'react-redux';

//constants
import * as actionTypes from '../../store/actions';

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
            isPurchasable: false,
            purchasing: false,
            loading: false
        }

        //bindings
        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
    };

    componentDidMount() {
        // COMMENT THIS FOR LEARNING THE SYNC WAY ON THE REDUCER
        // axiosInstance.get('/ingredients.json')
        //     .then((res) => {
        //         this.setState({ ingredients: res.data});
        //     }).catch((err) => {
        //         // HERE WILL BE POSSIBLE TO MANAGE AN STATE PROPERTY
        //         // AND HANDLE IT IN THIS COMPONENT -> NICE TO HAVE
        //         console.log(err);
        //     });
    }

    updatePurchaseState(ingredients) {
        let numberOfIngredients = Object.keys(ingredients).reduce( (prev, ingredient) => {
            return prev + ingredients[ingredient];
        }, 0);

        this.setState({ isPurchasable: numberOfIngredients > 0});
    }

    purchaseHandler() {
        this.setState({purchasing: true});
    }
    
    purchaseCancelHandler() {
        this.setState({purchasing: false});
    }
    
    purchaseContinueHandler() {
        const queryParams = [];
        for(let ingredient in this.props.ingredients) {
            queryParams.push(`${encodeURIComponent(ingredient)}=${encodeURIComponent(this.props.ingredients[ingredient])}`);
        }

        queryParams.push('price='+this.props.totalPrice);

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`
        });
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
                        { !this.state.loading ?
                            <OrderSummary 
                                ingredients={this.props.ingredients} 
                                price={this.props.totalPrice}
                                purchaseCancel={this.purchaseCancelHandler}
                                purchaseContinue={this.purchaseContinueHandler}/> :

                            <Spinner />
                        }
                    </Modal>
                    <Burger ingredients={this.props.ingredients}/>
                    <BuildControls 
                        addIngredient={this.props.onIngredientAdded} 
                        removeIngredient={this.props.onIngredientRemoved} 
                        disabled={disabledInfo}
                        price={this.props.totalPrice}
                        purchasable={this.state.isPurchasable}
                        order={this.purchaseHandler}/>
                </>
            );
        }

        return burgerBuilderContent;
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingredientName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName }),
        onIngredientRemoved: (ingredientName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosInstance));