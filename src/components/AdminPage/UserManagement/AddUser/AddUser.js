import React, {useState} from 'react';
import SimpleSnackbarContainer from "../../../Ui/Snackbar/SimpleSnackbarContainer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function AddUser(props) {

    const initalState = {
        firstName: '',
        lastName: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        admin: false
    };
    const [state, setState] = useState(initalState);

    const onSubmit = event => {
        props.createUser(state);
        setState(initalState);
        event.preventDefault();
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onChangeCheckbox = event => {
        setState({
            ...state,
            [event.target.name]: !event.target.defaultChecked
        });
    };

    const isInvalid =
        state.passwordOne !== state.passwordTwo ||
        state.passwordOne === '' ||
        state.email === '' ||
        state.firstName === ''||
        state.lastName === '';

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <TextField
                    name="firstName"
                    value={state.firstName}
                    onChange={onChange}
                    type="text"
                    placeholder="Firstname"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="lastName"
                    value={state.lastName}
                    onChange={onChange}
                    type="text"
                    placeholder="Lastname"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    type="text"
                    placeholder="Email Address"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="passwordOne"
                    value={state.passwordOne}
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="passwordTwo"
                    value={state.passwordTwo}
                    onChange={onChange}
                    type="password"
                    placeholder="Confirm Password"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <FormControlLabel
                    control={<Checkbox
                        color="primary"
                        onChange={onChangeCheckbox}
                        checked={state.admin}
                        name="admin"
                        />}
                        label="Is this user an admin?"
                />

                <Button disabled={isInvalid} type="submit" color="primary" variant="contained">
                    Create User
                </Button>
            </form>
            <SimpleSnackbarContainer/>
        </div>
    );
}

export default AddUser;

