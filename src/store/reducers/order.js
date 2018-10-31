import * as actionTypes from '../actions/actionsTypes';

//utilities
import { updateObject } from "../utilities/utilities";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, {purchased: false});

        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, {loading: false});

        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return updateObject(state, {
                loading: false,
                orders: state.orders.concat({id: action.id, ...action.orderData }),
                purchased: true
            });
        
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, {loading: false});

        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, {loading: true});
            
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {
                loading: false,
                orders: action.orders
            });
            
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, {loading: false});
        
        default:
            break;
    }

    return state;
}

export default orderReducer;