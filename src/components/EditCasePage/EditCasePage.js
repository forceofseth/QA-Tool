import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../Status/ForbiddenPage";
import {getAuthUser} from "../../redux/selectors";
import {connect} from "react-redux";

function EditedCase(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);

    return (
        <div>{props.authUser ? <EditCasePage/> : <ForbiddenPage/>}</div>
    );
}

function EditCasePage() {
    return (
        <Container maxWidth="lg">
            <CssBaseline/>
            <h1>Edit Case</h1>
        </Container>
    );
}

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(EditedCase);