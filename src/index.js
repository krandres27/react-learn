import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// THE REDUCER THAT THE CREATE METHOD NEEDS
import rootReducer from './store/reducer';

//MIDDLEWARE
const logger = store => {
    // THIS RETURN A NEW FUNCTION THAT RECIEVES THE NEXT ARGUMENT AND CAN BE IT EXECUTED
    // TO LET THE ACTION CONTINUE ITS JOURNEY ONTO THE REDUCER.
    return next => {
        // THIS RETURN A NEW FUNCTION THAT IS ACTUALLY THE MIDDLEWARE AND RECIEVES AN ACTION
        return action => {
            console.log('[MIDDLEWARE] dipatching', action);
            const result = next(action);
            console.log('[MIDDLEWARE] next state', store.getState());
            return result;
        }
    }
}

// DEBUGGIN
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// THE STORE SHOULD BE CREATED BEFORE OR WHEN THE APPLICATION START
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

// PROVIDER IS A HELPER COMPONENT WHICH ALLOWS TO INJECT THE STORE ON THE REACT COMPONENTS
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
