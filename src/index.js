import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// THE REDUCER THAT THE CREATE METHOD NEEDS
import reducer from './store/reducer';

// THE STORE SHOULD BE CREATED BEFORE OR WHEN THE APPLICATION START
const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
