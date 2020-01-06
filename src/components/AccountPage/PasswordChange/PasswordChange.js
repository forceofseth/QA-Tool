import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SimpleSnackbarContainer from "../../Ui/Snackbar/SimpleSnackbarContainer";


function PasswordChange(props) {

    const initialState = {
        passwordOne: '',
        passwordTwo: '',
    };

    const [state, setState] = useState(initialState);

    const isInvalid =
        state.passwordOne !== state.passwordTwo || state.passwordOne === '';

    const onSubmit = event => {
        props.changePassword(state.passwordOne);
        event.preventDefault();
        setState(initialState);
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <TextField
                    id="outlined-email-input"
                    margin="normal"
                    variant="outlined"
                    name="passwordOne"
                    value={state.passwordOne}
                    onChange={onChange}
                    type="password"
                    label="New Password"
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
                    label="Confirm New Password"
                    required
                    fullWidth
                />
                <Button disabled={isInvalid} type="submit" color="primary" variant="contained">
                    Change My Password
                </Button>
            </form>
            <SimpleSnackbarContainer/>
        </div>
    );
}

export default PasswordChange;
