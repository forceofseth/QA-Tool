import React, { useState,useContext } from 'react';
import FirebaseContext from "../firebase/context";

function SignUp() {

    const INITIAL_STATE = {
        username: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        error: null,
    };
    const [state, setState] =useState(INITIAL_STATE);
    const firebase = useContext(FirebaseContext);

    const onSubmit = event => {
        const{username, email, passwordOne} = state;

        firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(() => {
                setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                setState({ error });
            });
        event.preventDefault();
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value});
        console.log(state);
    };

    const isInvalid =
        state.passwordOne !== state.passwordTwo ||
        state.passwordOne === '' ||
        state.email === '' ||
        state.username === '';

    return (
        <div>
            <h1>SignUp</h1>

            <form onSubmit={onSubmit}>
                <input
                    name="username"
                    value={state.username}
                    onChange={onChange}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={state.passwordOne}
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={state.passwordTwo}
                    onChange={onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>
                {state.error && <p>{state.error.message}</p>}
            </form>
        </div>
    );
}

export default SignUp;