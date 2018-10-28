import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//AXIOS INTERCEPTORS - TO INTERCEPT ANY REQUEST OR RESPONSE GLOBALLY

// REQUEST INTERCEPTOR
axios.interceptors.request.use( request => {
    console.log(request);
    // return the request so it can follow its path and 
    // reach the block that is actually calling it
    return request;
}, error => {
    console.log(error);
    // return the Promise.reject so it can follow its path to 
    //the catch block of the statement that made the request
    return Promise.reject(error);
});

// RESPONSE INTERCEPTOR
axios.interceptors.response.use( response => {
    console.log(response);
    // return the response so it can follow its path and 
    // reach the block that is actually calling it
    return response;
}, error => {
    console.log(error);
    // return the Promise.reject so it can follow its path to 
    // the catch block of the statement that made the call
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
