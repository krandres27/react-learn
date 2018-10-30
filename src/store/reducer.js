const initialState = {
    counter: 0
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
    }
    
    

    return state;
}

export default reducer;