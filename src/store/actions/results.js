import * as actionTypes from './actionTypes';

const storeResultSync = (result) => {
    // THIS FUNCTION WILL BE EXECUTED AND THE ACTION WILL BE DISPATCHED
    // AFTER THE ASYNC CODE HAS BEEN RESOLVED
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

export const storeResult = (result) => {
    // WITH THE HELP OF THUNK MIDDLEWARE NO IT STOPPES THE DISPATCH
    // AND LET EXECUTE ASYNC CODE HERE BEFORE TO CONTINUE TO CHANGE THE STATE
    return dispatch => {
        setTimeout(() => {
            dispatch(storeResultSync(result))
        }, 2000);
    }
}
export const deleteResult = (elementId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        elementId
    }
}