import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {FormGroup} from "@material-ui/core";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../Status/ForbiddenPage";

function AddCasePage(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);

    return (
        <div>{props.authUser ? <AddCaseAuth/> : <ForbiddenPage/>}</div>
    );
}


function AddCaseAuth() {
    return (
        <Container maxWidth="lg" className="mainContainer">
            <CssBaseline/>
            <h1>Add Case</h1>


            <FormGroup>
                <h2> html / head</h2>
                <FormControlLabel
                    control={
                        <Checkbox/>
                    }
                    label="Primary"
                />
                <FormControlLabel
                    control={
                        <Checkbox/>
                    }
                    label="Primary"
                />
                <FormControlLabel
                    control={
                        <Checkbox/>
                    }
                    label="Primary"
                />
            </FormGroup>

            <FormGroup>
                <h2> stylesheets</h2>
                <FormControlLabel
                    control={
                        <Checkbox/>
                    }
                    label="Primary"
                />
                <FormControlLabel
                    control={
                        <Checkbox/>
                    }
                    label="Primary"
                />
                <FormControlLabel
                    control={
                        <Checkbox/>
                    }
                    label="Primary"
                />
            </FormGroup>

        </Container>
    );
}


export default AddCasePage;