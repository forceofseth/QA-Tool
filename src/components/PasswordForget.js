import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {getFirebaseApp} from "../redux/selectors";
import {connect} from "react-redux";


function PasswordForget(props) {

    const INITIAL_STATE = {
        email: '',
        error: null
    };

    const [state, setState] = useState(INITIAL_STATE);


    const isInvalid = state.email === '';

    const onSubmit = event => {
        props.firebaseApp
            .doPasswordReset(state.email)
            .then(() => {
                setState({...INITIAL_STATE});
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
                {state.error && <p>{state.error.message}</p>}
            </form>
        </div>
    );
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
);
export {PasswordForgetLink};

const mapStateToProps = state => {
    return {
        firebaseApp: getFirebaseApp(state)
    };
};


export default connect(mapStateToProps)(PasswordForget);