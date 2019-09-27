import React from 'react';
import PasswordChange from './PasswordChange/PasswordChange';
import ForbiddenPage from "../Status/ForbiddenPage";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";


function AccountPage(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);


    return (
        <div>{props.authUser ? <AccountAuth/> : <ForbiddenPage/>}</div>
    );
}

const AccountAuth = () => (

    <Container maxWidth="lg">
        <CssBaseline/>
        <div>
            <h1>Account</h1>
            <h2>password change</h2>
            <PasswordChange/>
        </div>
    </Container>
);


export default AccountPage;
