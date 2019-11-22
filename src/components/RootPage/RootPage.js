import React from 'react';
import './RootPage.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import AccountPageContainer from "../AccountPage/AccountPageContainer";
import AddCasePageContainer from "../AddCasePage/AddCasePageContainer";
import AdminPageContainer from "../AdminPage/AdminPageContainer";
import EditCaseContainer from "../EditCasePage/EditCasePageContainer";
import HomePageContainer from "../HomePage/HomePageContainer";
import PasswordForgetPageContainer from "../PasswordForgetPage/PasswordForgetPageContainer";
import SignInPageContainer from "../SignInPage/SignInPageContainer";
import AddUserContainer from "../AdminPage/AddUser/AddUserContainer";
import PrivateRouteContainer from "../Ui/PrivateRoute/PrivateRouteContainer";
import AdminRouteContainer from "../Ui/AdminRoute/AdminRouteContainer";
import NavigationContainer from "./Navigation/NavigationContainer";


function RootPage(props) {
    //TODO all Routes should be Pages?
    return (
        <Router>
            <div>
                {props.auth.isEmpty ? null : <NavigationContainer/>}
                <Route path={ROUTES.SIGN_IN} component={SignInPageContainer}/>
                <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPageContainer}/>
                <PrivateRouteContainer exact path={ROUTES.HOME} component={HomePageContainer}/>
                <PrivateRouteContainer path={ROUTES.ACCOUNT} component={AccountPageContainer}/>
                <PrivateRouteContainer path={ROUTES.ADD_USER} component={AddUserContainer}/>
                <AdminRouteContainer path={ROUTES.ADMIN} component={AdminPageContainer}/>
                <PrivateRouteContainer path={ROUTES.ADD_CASE} component={AddCasePageContainer}/>
                <PrivateRouteContainer path={ROUTES.EDIT_CASE} component={EditCaseContainer}/>
            </div>
        </Router>
    );
}


export default RootPage;
