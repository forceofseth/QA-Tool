import React, {useEffect} from 'react';
import './RootPage.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import * as ROUTES from '../../constants/routes'
import AccountPageContainer from "../AccountPage/AccountPageContainer";
import AddCasePageContainer from "../AddCasePage/AddCasePageContainer";
import AdminPageContainer from "../AdminPage/AdminPageContainer";
import EditCaseContainer from "../EditCasePage/EditCaseContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import PasswordForgetPageContainer from "../PasswordForgetPage/PasswordForgetPageContainer";
import SignInPageContainer from "../SignInPage/SignInPageContainer";
import AddUserContainer from "../AdminPage/AddUser/AddUserContainer";


function RootPage(props) {
    //TODO delete and use firebase App in index.js
    useEffect(() => {
        props.createFirebaseApp()
    }, [props]);

    //TODO all Routes should be Pages
    return (
        <Router>
            <div>
                {props.auth.isEmpty ? null : <Navigation/>}
                <Route exact path={ROUTES.SIGN_IN} component={SignInPageContainer}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPageContainer}/>
                <Route path={ROUTES.HOME} component={HomePageContainer}/>
                <Route path={ROUTES.ACCOUNT} component={AccountPageContainer}/>
                <Route path={ROUTES.ADD_USER} component={AddUserContainer}/>
                <Route path={ROUTES.ADMIN} component={AdminPageContainer}/>
                <Route path={ROUTES.ADD_CASE} component={AddCasePageContainer}/>
                <Route path={ROUTES.EDIT_CASE} component={EditCaseContainer}/>
            </div>
        </Router>
    );
}


export default RootPage;
