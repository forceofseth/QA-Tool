import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function PasswordChange(props) {

    const INITIAL_STATE = {
        passwordOne: '',
        passwordTwo: '',
        error: null
    };

    const [state, setState] = useState(INITIAL_STATE);

    const isInvalid =
        state.passwordOne !== state.passwordTwo || state.passwordOne === '';

    const onSubmit = event => {
        props.firebaseApp
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
        <form className="form" onSubmit={onSubmit}>
            <TextField
                id="outlined-email-input"
                margin="normal"
                variant="outlined"
                name="passwordOne"
                value={state.passwordOne}
                onChange={onChange}
                type="password"
                placeholder="New Password"
                required
                fullWidth
            />
            <TextField
                id="outlined-email-input"
                margin="normal"
                variant="outlined"
                name="passwordTwo"
                value={state.passwordTwo}
                onChange={onChange}
                type="password"
                placeholder="Confirm New Password"
                required
                fullWidth
            />
            <Button disabled={isInvalid} type="submit" color="primary" variant="contained">
                Reset My Password
            </Button>
            {state.error && <p>{state.error.message}</p>}
        </form>
    );
}


export default PasswordChange;
