import React, {useEffect, useState} from 'react';
import {useAuthorizationRedirect} from "../../../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../../../Ui/Snackbar/SimpleSnackbarContainer";
import Loading from "../../../Status/Loading";
import {ADMIN} from "../../../../constants/routes";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

function EditUser(props) {
    useAuthorizationRedirect(props.auth);
    const {userToEdit: userToEdit} = props;
    const [state, setState] = useState({...userToEdit});

    useEffect(() => {
        setState({...userToEdit})
    }, [userToEdit]);


    const onSubmit = event => {
        event.preventDefault();
        props.updateUser(state);
        props.history.push(ADMIN);
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
        state.firstName === ''||
        state.lastName === ''||
        state.admin === '';

    return (
        <Container maxWidth="lg" className="mainContainer">
            {userToEdit ? (
                <div>
                    <form className="form" onSubmit={onSubmit} onChange={onChange} state={state} title={"Edit User"}>
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
                        <FormControlLabel
                            control={<Checkbox
                                onChange={onChangeCheckbox}
                                defaultChecked = {state.admin}
                                name="admin"
                            />}
                            label="Is this user an admin?"
                        />

                        <Button disabled={isInvalid} type="submit" color="primary" variant="contained">
                            Update User
                        </Button>
                    </form>
                    <SimpleSnackbarContainer/>
                </div>
            ) : (
                <Loading/>
            )}
        </Container>
    );
}


export default EditUser;