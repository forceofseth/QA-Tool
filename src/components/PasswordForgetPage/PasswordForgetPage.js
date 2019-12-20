import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function PasswordForgetPage(props) {

    const INITIAL_STATE = {
        email: '',
    };

    const [state, setState] = useState(INITIAL_STATE);

    const isInvalid = state.email === '';

    const onSubmit = event => {
        props.resetPassword(state.email);
        event.preventDefault();
        setState(INITIAL_STATE);
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Box component="span" className="loginFullPage">
            <Container maxWidth="md">
                <div className="paper">
                    <h1 className="title">Reset your Password</h1>
                    <Link to='/' className="backButton">
                        <Button color="primary" variant="contained">
                            <span>BACK</span>
                        </Button>
                    </Link>
                    <form className="form" noValidate onSubmit={onSubmit}>
                        <TextField
                            id="outlined-email-input"
                            margin="normal"
                            variant="outlined"
                            label="E-Mail"
                            required
                            fullWidth
                            name="email"
                            value={state.email}
                            onChange={onChange}
                            type="text"
                            placeholder="Email Address"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            disabled={isInvalid}
                        >
                            Reset My Password
                        </Button>

                    </form>
                </div>
            </Container>
            <SimpleSnackbarContainer/>
        </Box>
    );
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);
export {PasswordForgetLink};
export default PasswordForgetPage;