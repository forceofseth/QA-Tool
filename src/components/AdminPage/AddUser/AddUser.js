import React, {useState} from 'react';
import SimpleSnackbarContainer from "../../Ui/Snackbar/SimpleSnackbarContainer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function AddUser(props) {

    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        admin: ''
    };
    const [state, setState] = useState(INITIAL_STATE);

    const onSubmit = event => {
        props.createUser(state);
        setState(INITIAL_STATE);
        event.preventDefault();
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const isInvalid =
        state.passwordOne !== state.passwordTwo ||
        state.passwordOne === '' ||
        state.email === '' ||
        state.firstName === ''||
        state.lastName === ''||
        state.admin === '';

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <TextField
                    name="firstName"
                    value={state.firstName}
                    onChange={onChange}
                    type="text"
                    placeholder="FirstName"
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
                    placeholder="LastName"
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
                {/*TODO create dropdown with true or false*/}
                <TextField
                    name="admin"
                    value={state.admin}
                    onChange={onChange}
                    type="text"
                    placeholder="Is the User an Admin?"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
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

