import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// THE REDUCER THAT THE CREATE METHOD NEEDS
import rootReducer from './store/reducer';

// THE STORE SHOULD BE CREATED BEFORE OR WHEN THE APPLICATION START
const store = createStore(rootReducer);

// PROVIDER IS A HELPER COMPONENT WHICH ALLOWS TO INJECT THE STORE ON THE REACT COMPONENTS
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
