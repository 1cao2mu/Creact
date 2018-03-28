import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Auth from './auth';
import reducers from "./reducer"
import { createStore, compose, applyMiddleware } from "redux"
import thunk from 'redux-thunk';
import { Provider } from "react-redux"
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom'
import './config'
import 'antd-mobile/dist/antd-mobile.css';

const store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : () => { }));

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Switch>
                <Route path={"/auth"} component={Auth} />
                <Route path={"/main"} component={Main} />
                <Redirect to={"/auth"} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
