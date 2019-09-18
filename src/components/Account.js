import React from 'react';
import PasswordChangeForm from './PasswordChange';
import Forbidden from "./Forbidden";
import {useAuthorizationRedirect} from "../hooks/useAuthorizationRedirect";
import {connect} from "react-redux";
import {getAuthUser} from "../redux/selectors";


function Account(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);


    return (
        <div>{props.authUser ? <AccountAuth/> : <Forbidden/>}</div>
    );
}

const AccountAuth = () => (
    <div>
        <h1>Account</h1>
        <PasswordChangeForm/>
    </div>
);

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(Account);
