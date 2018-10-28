import React, { Component } from 'react';

//components
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 1,
                meat: 1
            }
        }
    };

    render() {
        return(
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </>
        );
    }
};

export default BurgerBuilder;