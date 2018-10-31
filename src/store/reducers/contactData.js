import * as actionTypes from './actions';
import INGREDIENT_PRICES from '../../const/const';

// initial state
const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
}

//reducer
const contactDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_ALL_INGREDIENTS:
                const defaultIngredients = {
                    salad: 0,
                    bacon: 0,
                    cheese: 0,
                    meat: 0
                }
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        ...defaultIngredients
                    },
                    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
                }
            break;
    
        default:
            break;
    }
    return state;
}

export default contactDataReducer;