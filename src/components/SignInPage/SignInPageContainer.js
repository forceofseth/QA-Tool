import {loginUser} from "../../redux/actions/firebaseActions";
import {getAuthUser, getFirebaseApp} from "../../redux/selectors";
import {connect} from "react-redux";
import SignInPage from "./SignInPage";

const mapDispatchToProps = {
    loginUser
};

const mapStateToProps = state => {
    return {
        authUser: getAuthUser(state),
        firebaseApp: getFirebaseApp(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
