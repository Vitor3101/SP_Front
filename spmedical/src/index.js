import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './'
import reportWebVitals from './reportWebVitals';
import {
    Route,
    BrowserRouter as Router,
    Redirect,
    Switch,
} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route path="/" component={Login} />
            </Switch>
        </div>


    </Router>
)


ReactDOM.render(document.getElementById('root'));
reportWebVitals();