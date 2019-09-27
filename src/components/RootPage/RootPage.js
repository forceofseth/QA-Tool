import React, {useEffect} from 'react';
import './RootPage.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import AddUser from "../AdminPage/AddUser/AddUser";
import * as ROUTES from '../../constants/routes'
import AccountContainer from "../AccountPage/AccountPageContainer";
import AddCasePageContainer from "../AddCasePage/AddCasePageContainer";
import AdminPageContainer from "../AdminPage/AdminPageContainer";
import EditCaseContainer from "../EditCasePage/EditCaseContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import PasswordForgetPageContainer from "../PasswordForgetPage/PasswordForgetPageContainer";
import SignInPageContainer from "../SignInPage/SignInPageContainer";


function RootPage(props) {
//todo deconstruct props outside the useEffect?
    useEffect(() => {
        props.createFirebaseApp()
    }, [props]);

    return (
        <Router>
            <div>
                {props.authUser ? <Navigation/> : null}
                <Route exact path={ROUTES.SIGN_IN} component={SignInPageContainer}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPageContainer}/>
                <Route path={ROUTES.HOME} component={HomePageContainer}/>
                <Route path={ROUTES.ACCOUNT} component={AccountContainer}/>
                <Route path={ROUTES.ADD_USER} component={AddUser}/>
                <Route path={ROUTES.ADMIN} component={AdminPageContainer}/>
                <Route path={ROUTES.ADD_CASE} component={AddCasePageContainer}/>
                <Route path={ROUTES.EDIT_CASE} component={EditCaseContainer}/>
            </div>
        </Router>
    );
}


export default RootPage;
