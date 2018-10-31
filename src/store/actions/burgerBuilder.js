import * as actionTypes from './actionsTypes';
import axiosInstance from '../../axios-orders';

// ACTION CREATORS

export const removeAllIngredients = () => {
    return {
        type: actionTypes.REMOVE_ALL_INGREDIENTS
    };
};

export const addIngredient = (ingredientName) => {
    console.log('e')
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName
    };
};

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName
    };
};

const fetchIngredientsFail = (error) => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAIL
    }
}

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const initIngredients = () => {
    return dispatch => {
        axiosInstance.get('/ingredients.json')
            .then((res) => {
                dispatch(setIngredients(res.data));
            }).catch((err) => {
                dispatch(fetchIngredientsFail(err))
            });
    }
}
