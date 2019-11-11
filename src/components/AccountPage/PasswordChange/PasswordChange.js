import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


function PasswordChange(props) {

    const INITIAL_STATE = {
        passwordOne: '',
        passwordTwo: '',
    };

    const [state, setState] = useState(INITIAL_STATE);

    const isInvalid =
        state.passwordOne !== state.passwordTwo || state.passwordOne === '';

    const onSubmit = event => {
        props.changePassword(state.passwordOne);
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
                Change My Password
            </Button>
            {props.error && <p className='error'>{props.error.message}</p>}
            {props.successMessage && <p className='success'>{props.successMessage}</p>}
        </form>
    );
}


export default PasswordChange;
