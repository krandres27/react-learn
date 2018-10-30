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
            return {
                ...state,
                results: state.results.slice()
            }
            break;
        default:
            break;

    }    

    return state;
}

export default reducer;