import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_INIT:
                return {
                    ...state,
                    purchased: false
                }
            break;
        case actionTypes.PURCHASE_BURGER_START:
                return {
                    ...state,
                    loading: true
                }
            break;
        case actionTypes.PURCHASE_BURGER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    orders: state.orders.concat({id: action.id, ...action.orderData }),
                    purchased: true
                }
            break;
        case actionTypes.PURCHASE_BURGER_FAIL:
                return {
                    ...state,
                    loading: false
                }
            break;
        

        default:
            break;
    }

    return state;
}

export default orderReducer;