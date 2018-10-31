import * as actionTypes from './actionsTypes';
import axiosInstance from '../../axios-orders';

const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData 
    };
}

const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
}

export const purchaseBurgerStart= () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
}


export const purchaseBurger= (orderData) => {
    return dispatch => {
        
        dispatch(purchaseBurgerStart());

        axiosInstance.post('/orders.json', orderData)
            .then((res) => {
                dispatch(purchaseBurgerSuccess(res.data.id, orderData));
            }).catch((err) => {
                dispatch(purchaseBurgerFail(err));
            });
    }
}