import React from 'react';

//css
import Classes from './Order.css'

const Order = (props) => {
    let ingredients = [];

    for(let key in props.ingredients) {
        ingredients.push({ ingredient: key, quantity: props.ingredients[key]})
    }
        
    ingredients = ingredients.map((ingredientInfo, i) => {
        return <li key={ingredientInfo.ingredient+i}>{ingredientInfo.ingredient} - {ingredientInfo.quantity}</li>
    });

    return(
        <div className={Classes.Order}>
            <div>
                <strong>Ingredients:</strong>
                <ul>
                    {ingredients}
                </ul>
            </div>
            <p>
                <strong>Price: </strong><span>{props.price}</span>    
            </p>
            <p>
                <strong>Customer: </strong><span>{props.customer.name}</span>    
            </p>
        </div>
    )
}

export default Order;