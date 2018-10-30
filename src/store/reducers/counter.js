import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
            break;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
            break;
        case actionTypes.INCREMENT_5:
            return {
                ...state,
                counter: state.counter + action.value
            }
            break;
        case actionTypes.DECREMENT_5:
            return {
                ...state,
                counter: state.counter - action.value
            }
            break;
        default:
            console.log(state);
            break;

    }    

    return state;
}

export default reducer;