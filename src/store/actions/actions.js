export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_5 = 'INCREMENT_5';
export const DECREMENT_5 = 'DECREMENT_5';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// ACTION CREATOR - CONVENTION: USE THE SAME NAME AS 
// THE IDENTIFIER BUT IN CAMELCASE
export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const increment5 = (value) => {
    return {
        type: INCREMENT_5,
        value: value
    }
}

export const decrement5 = (value) => {
    return {
        type: DECREMENT_5,
        value: value
    }
}

export const storeResult = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
}
export const deleteResult = (elementId) => {
    return {
        type: DELETE_RESULT,
        elementId
    }
}
