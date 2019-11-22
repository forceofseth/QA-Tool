import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";


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
        <div>
            <h1>PasswordForget</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>
            </form>
            <SimpleSnackbarContainer/>
        </div>
    );
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);
export {PasswordForgetLink};
export default PasswordForgetPage;