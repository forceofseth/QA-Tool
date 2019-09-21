import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../hooks/useAuthorizationRedirect";
import Forbidden from "./Forbidden";
import {getAuthUser} from "../redux/selectors";
import {connect} from "react-redux";

function AddUser(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);

    return (
        <div>{props.authUser ? <NewUser/> : <Forbidden/>}</div>
    );
}



function NewUser() {
    return (
        <Container maxWidth="lg">
            <CssBaseline/>
            <h1>Add New User</h1>

        </Container>
    );
}

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(AddUser);