import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../../Status/ForbiddenPage";

//TODO auf admin Page verankern
function AddUser(props) {

    useAuthorizationRedirect(props.auth);

    return (
        <div>{props.auth.isEmpty ? <ForbiddenPage/> : <AddUserAuth/>}</div>
    );
}

const AddUserAuth = () => {
    return (
        <Container maxWidth="lg">
            <CssBaseline/>
            <h1>Add New User</h1>
        </Container>)
};


export default AddUser;