import React from 'react';
import ForbiddenPage from "../Status/ForbiddenPage";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import '../global.css';
import PasswordChangeContainer from "./PasswordChange/PasswordChangeContainer";


function AccountPage(props) {

    useAuthorizationRedirect(props.auth);

    return (
        <div>{!props.auth.uid ? <ForbiddenPage/> : <Account/>}</div>
    );
}

const Account = () => (

    <Container maxWidth="lg" className="mainContainer">
        <CssBaseline/>
        <div>
            <h1>Account</h1>
            <h2>password change</h2>
            <PasswordChangeContainer/>
        </div>
    </Container>
);


export default AccountPage;
