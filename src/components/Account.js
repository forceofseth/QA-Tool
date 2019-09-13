import React, {useContext, useEffect} from 'react';
import PasswordChangeForm from './PasswordChange';
import {withRouter} from 'react-router-dom';
import FirebaseContext from "../firebase/context";
import * as ROUTES from '../constants/routes';


function Account(props) {

    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        firebase.auth.onAuthStateChanged(authUser => {
            if (!authUser) {
                props.history.push(ROUTES.SIGN_IN)
            }
        });
    }, [firebase.auth, props.history]);

    return (
        <div>
            <h1>Account</h1>
            <PasswordChangeForm/>
        </div>
    );
}

export default withRouter(Account);