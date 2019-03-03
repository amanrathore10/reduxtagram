import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/_animations.css'
import './styles/_normalize.css'
import './styles/_typography.css'
import './styles/style.css'

import {  BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';


const MainRouter =  (
    <Provider store={store}>
        <BrowserRouter >
            <Route path='/' component={App}/>
        </BrowserRouter>
    </Provider>
);
render( MainRouter, document.getElementById('root') );
