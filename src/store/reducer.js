const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
            break;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
            break;
        case 'INCREMENT_5':
            return {
                ...state,
                counter: state.counter + action.value
            }
            break;
        case 'DECREMENT_5':
            return {
                ...state,
                counter: state.counter - action.value
            }
            break;
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({value: state.counter, id: new Date()})
            }
            break;
        case 'DELETE_RESULT':
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