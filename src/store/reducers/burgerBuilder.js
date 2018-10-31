import * as actionTypes from '../actions/actionsTypes';
import INGREDIENT_PRICES from '../../const/const';

//utilities
import { updateObject } from "../utilities/utilities";

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
        
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
            
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    salad: action.ingredients.salad,
                    bacon: action.ingredients.bacon,
                    cheese: action.ingredients.cheese,
                    meat: action.ingredients.meat,
                },
                totalPrice: 4,
                error: false
            }

        case actionTypes.FETCH_INGREDIENTS_FAIL:
            return updateObject(state, {error: true});
    
        default:
            break;
    }
    return state;
}

export default burgerBuilderReducer;