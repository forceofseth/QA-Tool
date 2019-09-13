import React, {useContext, useState} from 'react';
import FirebaseContext from "../firebase/context";

function PasswordChange() {

    const INITIAL_STATE = {
        passwordOne: '',
        passwordTwo: '',
        error: null
    };

    const [state, setState] = useState(INITIAL_STATE);
    const firebase = useContext(FirebaseContext);

    const isInvalid =
        state.passwordOne !== state.passwordTwo || state.passwordOne === '';

    const onSubmit = event => {
        firebase
            .doPasswordUpdate(state.passwordOne)
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
            <h1>PasswordChange</h1>
            <form onSubmit={onSubmit}>
                <input
                    name="passwordOne"
                    value={state.passwordOne}
                    onChange={onChange}
                    type="password"
                    placeholder="New Password"
                />
                <input
                    name="passwordTwo"
                    value={state.passwordTwo}
                    onChange={onChange}
                    type="password"
                    placeholder="Confirm New Password"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>
                {state.error && <p>{state.error.message}</p>}
            </form>
        </div>
    );
}

export default PasswordChange;