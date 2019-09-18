import React, {useContext, useState} from 'react';
import FirebaseContext from "../firebase/context";
import {PasswordForgetLink} from './PasswordForget';
import * as ROUTES from '../constants/routes';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useReactRouter from "use-react-router";
import {connect} from "react-redux";
import {getLoggedInUser} from "../redux/firebaseActions";
import {getAuthUser} from "../redux/selectors";
import './SignIn.css';


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

    return (
        <main>
            <CssBaseline/>

            <Container maxWidth="md">
            <div className="paper">
                <form className="form" noValidate onSubmit={onSubmit}>
                    <TextField
                        id="outlined-email-input"
                        margin="normal"
                        variant="outlined"
                        value={state.email}
                        name="email"
                        onChange={onChange}
                        type="text"
                        label="E-Mail"
                        required
                        fullWidth
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        margin="normal"
                        variant="outlined"
                        name="password"
                        value={state.password}
                        onChange={onChange}
                        type="password"
                        required
                        fullWidth
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="submit"
                        disabled={isInvalid}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <PasswordForgetLink/>
                        </Grid>
                    </Grid>
                    {state.error && <p>{state.error.message}</p>}
                </form>
            </div>
        </Container>
        </main>
    );
}


const mapDispatchToProps = {
    getLoggedInUser
};

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};


export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
