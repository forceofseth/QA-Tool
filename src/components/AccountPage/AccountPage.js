import React from 'react';
import Container from "@material-ui/core/Container";
import '../global.css';
import PasswordChangeContainer from "./PasswordChange/PasswordChangeContainer";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";

function AccountPage(props) {
    useAuthorizationRedirect(props.auth);
    return(
        <Container maxWidth="lg" className="mainContainer">
            <h1>Account</h1>
            <h3>Password change</h3>
            <PasswordChangeContainer/>
        </Container>
    );
}

export default AccountPage;
