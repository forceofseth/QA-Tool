import React, {useContext, useState} from 'react';
import FirebaseContext from "../firebase/context";
import {PasswordForgetLink} from './PasswordForget';
import * as ROUTES from '../constants/routes';
import useReactRouter from "use-react-router";
import {connect} from "react-redux";
import {getLoggedInUser} from "../redux/firebaseActions";
import {getAuthUser} from "../redux/selectors";


function SignIn(props) {

    const INITIAL_STATE = {
        email: '',
        password: '',
        error: null,
    };
    const [state, setState] = useState(INITIAL_STATE);
    const firebase = useContext(FirebaseContext);
    const {history} = useReactRouter();


    const isInvalid = state.password === '' || state.email === '';

    const onSubmit = event => {
        firebase
            .doSignInWithEmailAndPassword(state.email, state.password)
            .then(() => {
                setState({...INITIAL_STATE});
                props.getLoggedInUser(firebase);
                history.push(ROUTES.HOME);
            })
            .catch(error => {
                setState({error});
            });
        event.preventDefault();
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

//todo passwordforget site needs a link back to signin
    return (
        <div>
            <h1>SignIn</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={state.password}
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>
                {state.error && <p>{state.error.message}</p>}
            </form>
            <PasswordForgetLink/>
        </div>
    );
}

const mapDispatchToProps = {
    getLoggedInUser
};

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
