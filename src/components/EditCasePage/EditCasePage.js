import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../Status/ForbiddenPage";

function EditCasePage(props) {

    useAuthorizationRedirect(props.auth);

    return (
        <div>{!props.auth.uid ? <ForbiddenPage/> : <EditCase/>}</div>
    );
}

function EditCase() {
    return (
        <Container maxWidth="lg" className="mainContainer">
            <CssBaseline/>
            <h1>Edit Case</h1>
        </Container>
    );
}


export default EditCasePage;