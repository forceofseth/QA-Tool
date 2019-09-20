import React, {useContext} from 'react';
import {connect} from "react-redux";
import {logoutUser} from "../redux/firebaseActions";
import {getAuthUser} from "../redux/selectors";
import FirebaseContext from "../firebase/context";


function SignOut(props) {
    const firebase = useContext(FirebaseContext);
    return (
        <button type="button" onClick={() => props.logoutUser(firebase)}>
            Sign Out
        </button>
    );
}


const mapDispatchToProps = {
    logoutUser: logoutUser
};

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
