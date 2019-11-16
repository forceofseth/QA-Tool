import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../../../hooks/useAuthorizationRedirect";
import SignUp from "../../SignUp";

//TODO auf admin Page verankern
    //TODO wenn addUser auf afdmin vewendet wird kann die Protected Subkomponente entfernt werden und admin muss protected sein nur admin sollen zugreifen dürfen.

const AddUser = (props) => {
    useAuthorizationRedirect(props.auth);
    return (
        <Container maxWidth="lg">
            <CssBaseline/>
            <SignUp/>
        </Container>);
};


export default AddUser;