import * as actionTypes from '../actions/actionsTypes';
import INGREDIENT_PRICES from '../../const/const';

// initial state
const initialState = {
    ingredients: {},
    totalPrice: 4,
    error: false
}

//reducer
const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                    },
                    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
                }
            break;
        case actionTypes.REMOVE_INGREDIENT:
                return {
                    ...state,
                    ingredients: {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
                    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
                }
            break;
        case actionTypes.SET_INGREDIENTS:
                return {
                    ...state,
                    ingredients: action.ingredients,
                    error: false
                }
            break;
        case actionTypes.FETCH_INGREDIENTS_FAIL:
                return {
                    ...state,
                    error: true
                }
            break;
    
        default:
            break;
    }
    return state;
}

export default burgerBuilderReducer;