import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({value: action.result, id: new Date()})
            }
            break;
        case actionTypes.DELETE_RESULT:
            // IMMUTABLE WAY -> CREATING A COPY OF THE ARRAY WITH THE FILTER METHOD
            const newResults = state.results.filter( result => result.id !== action.elementId)

            return {
                ...state,
                // results: state.results.splice(id, 1) THIS IS NOT IMMUTABLE 
                results: newResults
            }
            break;
        default:
            console.log(state);
            break;

    }    

    return state;
}

export default reducer;