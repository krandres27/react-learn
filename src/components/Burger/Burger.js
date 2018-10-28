import React from 'react';

// css
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = (props) => {
    let selectedIngredients = Object.keys(props.ingredients)
    .map( (ingredient) => {
        return [...Array(props.ingredients[ingredient])].map( (_, i) => {
            return <BurgerIngredient key={ingredient+i} type={ingredient} />
        })
    }).reduce((arr, el) => {
       return arr.concat(el)
    }, []);

    if(selectedIngredients.length <= 0) {
        selectedIngredients = <p>Please add some ingredients</p>
    }

    return (
        <div className={Classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {selectedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default Burger;