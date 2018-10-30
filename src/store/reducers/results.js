import * as actionTypes from '../actions/actionTypes';

//utilities
import { updateObject } from '../storeUtilities/storeUtilities';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({value: action.result, id: new Date()})})
            break;
        case actionTypes.DELETE_RESULT:
            // IMMUTABLE WAY -> CREATING A COPY OF THE ARRAY WITH THE FILTER METHOD
            const newResults = state.results.filter( result => result.id !== action.elementId)
            return updateObject(state, {results: newResults})
            break;
        default:
            console.log(state);
            break;

    }    

    return state;
}

export default reducer;