import React from 'react';
import './RootPage.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import * as ROUTES from '../../constants/routes'
import AccountPageContainer from "../AccountPage/AccountPageContainer";
import AddCasePageContainer from "../AddCasePage/AddCasePageContainer";
import AdminPageContainer from "../AdminPage/AdminPageContainer";
import EditCaseContainer from "../EditCasePage/EditCasePageContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import PasswordForgetPageContainer from "../PasswordForgetPage/PasswordForgetPageContainer";
import SignInPageContainer from "../SignInPage/SignInPageContainer";
import AddUserContainer from "../AdminPage/AddUser/AddUserContainer";
import SignUp from "../SignUp";
import PrivateRoute from "../Ui/PrivateRoute";


function RootPage(props) {
    //TODO all Routes should be Pages?
    return (
        <Router>
            <div>
                {props.auth.isEmpty ? null : <Navigation/>}
                <Route path={ROUTES.SIGN_IN} component={SignInPageContainer}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPageContainer}/>
                <PrivateRoute exact path={ROUTES.HOME} component={HomePageContainer}/>
                <PrivateRoute path={ROUTES.ACCOUNT} component={AccountPageContainer}/>
                <PrivateRoute path={ROUTES.ADD_USER} component={AddUserContainer}/>
                <PrivateRoute path={ROUTES.ADMIN} component={AdminPageContainer}/>
                <PrivateRoute path={ROUTES.ADD_CASE} component={AddCasePageContainer}/>
                <PrivateRoute path={ROUTES.EDIT_CASE} component={EditCaseContainer}/>
                <Route path={ROUTES.SIGN_UP} component={SignUp}/>
            </div>
        </Router>
    );
}


export default RootPage;
