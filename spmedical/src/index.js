import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/login'
import NotFund from './pages/notFund'
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
                <Route path="/Login" component={Login} />
                <Route path="/notFund" component={NotFund}/>
                <Redirect to="/notFund"/>
            </Switch>
        </div>


    </Router>
)


ReactDOM.render(document.getElementById('root'));
reportWebVitals();