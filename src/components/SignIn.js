import {SignUpLink} from './SignUp';
import React, {useContext, useState} from 'react';
import FirebaseContext from "../firebase/context";
import {PasswordForgetLink} from './PasswordForget';
import * as ROUTES from '../constants/routes';
import {withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




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

                <TextField
                    id="outlined-email-input"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    value={state.email}
                    name="email"
                    onChange={onChange}
                    type="text"
                    label="E-Mail"
                />

               <TextField
                    id="outlined-password-input"
                    label="Password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    name="password"
                    value={state.password}
                    onChange={onChange}
                    type="password"
                />

                <Button variant="contained" color="primary"  type="submit">
                    Sign In
                </Button>


                {state.error && <p>{state.error.message}</p>}
            </form>
            <PasswordForgetLink/>
            <SignUpLink/>
        </div>
    );
}

export default withRouter(SignIn);