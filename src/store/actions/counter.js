import * as actionTypes from './actionTypes';

// ACTION CREATOR - CONVENTION: USE THE SAME NAME AS 
// THE IDENTIFIER BUT IN CAMELCASE
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
}

export const increment5 = (value) => {
    return {
        type: actionTypes.INCREMENT_5,
        value: value
    }
}

export const decrement5 = (value) => {
    return {
        type: actionTypes.DECREMENT_5,
        value: value
    }
}