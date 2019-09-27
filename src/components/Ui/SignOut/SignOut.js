import React from 'react';
import {connect} from "react-redux";
import {logoutUser} from "../../../redux/actions/firebaseActions";


function SignOut(props) {
    return (
        <button type="button" onClick={() => props.logoutUser()}>
            Sign Out
        </button>
    );
}


const mapDispatchToProps = {
    logoutUser
};

// noinspection JSUnusedLocalSymbols (justification: todo remove later.)
const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
