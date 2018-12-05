import * as actionTypes from './actionsTypes';
import Axios from 'axios';

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
        type: actionTypes.AUTH_FAIL,
        error
    }
}

//  THUNK FUNCTION THAT WILL BE AIMED TO EXECUTE THE ASYNC CODE
export const auth = (email, password, isSignIn) => {
    let url = isSignIn ? 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]' : 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]';
    const data = {
        email,
        password,
        returnSecureToken: true
    }

    
    return dispatch => {
        dispatch(authStart());

        Axios.post(url, { email, password, data})
            .then( res => {
                dispatch(authSuccess(res));
            }).catch( err => {
                dispatch(authFail(err));
            }); 
    }
}
