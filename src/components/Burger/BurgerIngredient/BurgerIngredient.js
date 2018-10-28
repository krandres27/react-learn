import React, { Component } from 'react';
import PropTypes from 'prop-types';

// css
import BurgerIngredientClasses from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render() {
        let ingridient = null;

        switch (this.props.type) {
            case 'bread-bottom':
                    ingridient = <div className={BurgerIngredientClasses.BreadBottom}></div>
                break;
            case 'bread-top':
                    ingridient = (
                        <div className={BurgerIngredientClasses.BreadTop}>
                            <div className={BurgerIngredientClasses.Seeds1}></div>
                            <div className={BurgerIngredientClasses.Seeds2}></div>
                        </div>
                    );
                break;
            case 'meat':
                    ingridient = <div className={BurgerIngredientClasses.Meat}></div>
                break;
            case 'cheese':
                    ingridient = <div className={BurgerIngredientClasses.Cheese}></div>
                break;
            case 'bacon':
                    ingridient = <div className={BurgerIngredientClasses.Bacon}></div>
                break;
            case 'salad':
                    ingridient = <div className={BurgerIngredientClasses.Salad}></div>
                break;
        
            default:
                    ingridient = null;
                break;
        }

        return ingridient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;