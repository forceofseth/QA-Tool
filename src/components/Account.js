import React, {useContext} from 'react';
import PasswordChangeForm from './PasswordChange';
import Forbidden from "./Forbidden";
import {useAuthorizationRedirect} from "../hooks/useAuthorizationRedirect";
import {UserContext} from "./App";


function Account(props) {

    const authCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(authCondition, props.history);
    const {authUser} = useContext(UserContext);


    return (
        <div>{authUser ? <AccountAuth/> : <Forbidden/>}</div>
    );
}

const AccountAuth = () => (
    <div>
        <h1>Account</h1>
        <PasswordChangeForm/>
    </div>
);


export default Account;