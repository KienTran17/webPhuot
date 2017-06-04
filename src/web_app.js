import React, { Component } from 'react';
import ReactDOM from 'react-dom'; // thay cho require
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './app';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')// eslint-disable-line
);