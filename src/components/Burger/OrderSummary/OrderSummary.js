import React from 'react';

//components

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    let selectedIngredients = Object.keys(props.ingredients)
    .map( (ingredient, i) => {
        return <li key={ingredient+1}><span style={{ textTransform: 'capitalize' }}>{ingredient}: </span>{props.ingredients[ingredient]}</li>
    });
    return(
        <>
            <h3>Your order</h3>
            <p>The ingredients are:</p>
            <ul>
                {selectedIngredients}
            </ul>
            <strong>The price of your order is {props.price.toFixed(2)}</strong>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </>
    );
}

export default OrderSummary;