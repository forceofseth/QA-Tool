import React, {useEffect} from 'react';
import './RootPage.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import SignIn from '../SignInPage/SignInPage';
import PasswordForget from '../PasswordForgetPage/PasswordForgetPage';
import Home from '../HomePage/HomePage';
import Account from '../Account/Account';
import AddUser from "../AdminPage/AddUser/AddUser";
import AddCase from "../AddCasePage/AddCasePage";
import EditCase from "../EditCasePage/EditCasePage";
import AdminPage from '../AdminPage/AdminPage';
import * as ROUTES from '../../constants/routes'
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/selectors";
import {createFirebaseApp} from "../../redux/actions/firebaseActions";


function RootPage(props) {
//todo deconstruct props outside the useEffect?
    useEffect(() => {
        props.createFirebaseApp()
    }, [props]);

    return (
        <Router>
            <div>
                {props.authUser ? <Navigation/> : null}
                <Route exact path={ROUTES.SIGN_IN} component={SignIn}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget}/>
                <Route path={ROUTES.HOME} component={Home}/>
                <Route path={ROUTES.ACCOUNT} component={Account}/>
                <Route path={ROUTES.ADD_USER} component={AddUser}/>
                <Route path={ROUTES.ADMIN} component={AdminPage}/>
                <Route path={ROUTES.ADD_CASE} component={AddCase}/>
                <Route path={ROUTES.EDIT_CASE} component={EditCase}/>
            </div>
        </Router>
    );
}

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

const mapDispatchToProps = {
    createFirebaseApp
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
