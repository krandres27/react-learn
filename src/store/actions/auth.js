import * as actionTypes from './actionsTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData
    }
} 

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        error
    }
}

//  THUNK FUNCTION THAT WILL BE AIMED TO EXECUTE THE ASYNC CODE
export const auth = (email, password) => {
    console.log(email, password)
    return dispatch => {
        dispatch(authStart());
    }
}
