import React from 'react';
import {connect} from "react-redux";
import {logoutUser} from "../redux/firebaseActions";
import {getAuthUser} from "../redux/selectors";


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

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
