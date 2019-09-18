import React from 'react';
import PasswordChangeForm from './PasswordChange';
import {useAuthorization} from "../hooks/useAuthorization";


function Account(props) {

    const authCondition = (authUser) => (!!authUser);
    useAuthorization(authCondition, props.history);

    return (
        <div>
            <h1>Account</h1>
            <PasswordChangeForm/>
        </div>
    );
}

export default Account;