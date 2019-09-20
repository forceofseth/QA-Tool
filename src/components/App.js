import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import SignIn from './SignIn';
import PasswordForget from './PasswordForget';
import Home from './Home';
import Account from './Account';
import Admin from './Admin';
import * as ROUTES from '../constants/routes';
import {connect} from "react-redux";
import {getAuthUser} from "../redux/selectors";


function App(props) {
    return (
        <Router>
            <div>
                {props.authUser ? <Navigation/> : null}
                <Route exact path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget}/>
                <Route path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.ACCOUNT} component={Account}/>
                <Route path={ROUTES.ADMIN} component={Admin}/>
            </div>
        </Router>
    );
}

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(App);
