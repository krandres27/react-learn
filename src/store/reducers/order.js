import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    orders: [],
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (actionTypes) {
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
                    orders: state.orders.concat({id: action.id, ...action.orderData })
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
}

export default reducer;