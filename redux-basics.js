const redux = require('redux');
const createStore = redux.createStore;

// INITIALIZE STATE
const initialState = {
    counter: 0
}

// REDUCER
const rootReducer = (state = initialState, action) => {
    // here the actions can be defined
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// STORE
// the store need an attached reducer
const store = createStore(rootReducer);
console.log(store.getState());

//SUBSCRIPTION
// the suscribe method takes a callback that will be executed whenever the state is updated 
// (when) an action reaches the reducer, typically it is defined after the store was create
// to get informed of any future dispatches
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// DISPATCHING AN ACTION
// the dispatch takes an action as an argument and needs to have a type property
// the convention is to have the type value in UPPERCASE
store.dispatch({ type: 'INC_COUNTER'}); // Adds one
store.dispatch({ type: 'ADD_COUNTER', value: 10 }); // Add a number
console.log(store.getState());



