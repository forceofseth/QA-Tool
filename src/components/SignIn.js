import {SignUpLink} from './SignUp';
import React, {useContext, useState} from 'react';
import FirebaseContext from "../firebase/context";
import {PasswordForgetLink} from './PasswordForget';
import * as ROUTES from '../constants/routes';
import {withRouter} from 'react-router-dom';


function SignIn(props) {

    const INITIAL_STATE = {
        email: '',
        password: '',
        error: null,
    };
    const [state, setState] = useState(INITIAL_STATE);
    const firebase = useContext(FirebaseContext);

    const isInvalid = state.password === '' || state.email === '';

    const onSubmit = event => {
        firebase
            .doSignInWithEmailAndPassword(state.email, state.password)
            .then(() => {
                setState({...INITIAL_STATE});
                props.history.push(ROUTES.HOME);
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
            <SignUpLink/>
        </div>
    );
}

export default withRouter(SignIn);