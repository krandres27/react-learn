import React, { Component } from 'react';
import axiosInstance from '../../axios-orders';

//constants
import COMPANY_PRICES from '../../const/const';

//components
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

//UI
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

//HO
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';


const { INGREDIENT_PRICES } = COMPANY_PRICES;

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: null,
            totalPrice: 4,
            isPurchasable: false,
            purchasing: false,
            loading: false
        }

        //bindings
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
        this.purchaseHandler = this.purchaseHandler.bind(this);
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this);
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
    };

    componentDidMount() {
        axiosInstance.get('/ingredients.json')
            .then((res) => {
                this.setState({ ingredients: res.data});
            }).catch((err) => {
                // HERE WILL BE POSSIBLE TO MANAGE AN STATE PROPERTY
                // AND HANDLE IT IN THIS COMPONENT -> NICE TO HAVE
                console.log(err);
            });
    }

    updatePurchaseState(ingredients) {
        let numberOfIngredients = Object.keys(ingredients).reduce( (prev, ingredient) => {
            return prev + ingredients[ingredient];
        }, 0);

        this.setState({ isPurchasable: numberOfIngredients > 0});
    }

    addIngredientHandler(type) {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type] + 1;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients);
    }
    
    removeIngredientHandler(type) {
        if (this.state.ingredients[type] <= 0) {
            return;
        }

        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type] - 1;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice});

        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler() {
        this.setState({purchasing: true});
    }
    
    purchaseCancelHandler() {
        this.setState({purchasing: false});
    }
    
    purchaseContinueHandler() {
        const queryParams = [];
        for(let ingredient in this.state.ingredients) {
            queryParams.push(`${encodeURIComponent(ingredient)}=${encodeURIComponent(this.state.ingredients[ingredient])}`);
        }

        const queryString = queryParams.join('&');

        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`
        });
        // this.setState({ loading: true});

        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Andrés González',
        //         address: {
        //             street: 'calle falsa 123',
        //             country: 'Colombia'
        //         }
        //     },
        //     deliveryMethod: 'fastest'
        // }
        // axiosInstance.post('/orders.json', order)
        //     .then((res) => {
        //         console.log(res);
        //         this.setState({purchasing: false, loading: false});
        //     }).catch((err) => {
        //         this.setState({purchasing: false, loading: false});
        //         console.log(err);
        //     });

    }

    render() {
        let burgerBuilderContent = <Spinner />

        if(this.state.ingredients) { 
            const disabledInfo = {...this.state.ingredients};
            
            for (let key in disabledInfo) {
                disabledInfo[key] = disabledInfo[key] <= 0; 
            } 

            burgerBuilderContent = (
                <>
                    <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHandler}>
                        { !this.state.loading ?
                            <OrderSummary 
                                ingredients={this.state.ingredients} 
                                price={this.state.totalPrice}
                                purchaseCancel={this.purchaseCancelHandler}
                                purchaseContinue={this.purchaseContinueHandler}/> :

                            <Spinner />
                        }
                    </Modal>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        addIngredient={this.addIngredientHandler} 
                        removeIngredient={this.removeIngredientHandler} 
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        purchasable={this.state.isPurchasable}
                        order={this.purchaseHandler}/>
                </>
            );
        }

        return burgerBuilderContent;
    }
};

export default withErrorHandler(BurgerBuilder, axiosInstance);