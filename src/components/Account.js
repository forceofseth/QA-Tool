import React from 'react';
import PasswordChangeForm from './PasswordChange';
import Forbidden from "./Forbidden";
import {useAuthorizationRedirect} from "../hooks/useAuthorizationRedirect";
import {connect} from "react-redux";
import {getAuthUser} from "../redux/selectors";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";


function Account(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);


    return (
        <div>{props.authUser ? <AccountAuth/> : <Forbidden/>}</div>
    );
}

const AccountAuth = () => (

    <Container maxWidth="lg">
        <CssBaseline/>
    <div>
        <h1>Account</h1>
        <PasswordChangeForm/>
    </div>
    </Container>
);

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(Account);
