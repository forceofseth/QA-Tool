import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../../Status/ForbiddenPage";
import SignUp from "../../SignUp";

//TODO auf admin Page verankern
function AddUser(props) {
    //TODO wenn addUser auf afdmin vewendet wird kann die Protected Subkomponente entfernt werden und admin muss protected sein nur admin sollen zugreifen dürfen.
    useAuthorizationRedirect(props.auth);

    return (
        <div>{!props.auth.uid ? <ForbiddenPage/> : <ProtectedAddUser/>}</div>
    );
}

const ProtectedAddUser = () => {
    return (
        <Container maxWidth="lg">
            <CssBaseline/>
            <SignUp/>
        </Container>);
};


export default AddUser;