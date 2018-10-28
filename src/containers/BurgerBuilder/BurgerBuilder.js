import React, { Component } from 'react';

//constants
import COMPANY_PRICES from '../../const/const' ;

//components
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const { INGREDIENT_PRICES } = COMPANY_PRICES;

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4
        }

        //bindings
        this.addIngredientHandler = this.addIngredientHandler.bind(this);
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    };

    addIngredientHandler(type) {
        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type] + 1;

        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice});
    }
    
    removeIngredientHandler(type) {
        if (this.state.ingredients[type] <= 0) {
            return;
        }

        let updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredients[type] - 1;

        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice});
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0; 
        } 

        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler} 
                    disabled={disabledInfo}
                    price={this.state.totalPrice}/>
            </>
        );
    }
};

export default BurgerBuilder;