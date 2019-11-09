import {loginUser} from "../../redux/actions/firebaseActions";
import {getAuthUser, getFirebaseApp, getLoginError} from "../../redux/selectors";
import {connect} from "react-redux";
import SignInPage from "./SignInPage";
import '../global.css';
import './SignInPage.css';


const mapDispatchToProps = {
    loginUser
};

const mapStateToProps = state => {
    return {
        authUser: getAuthUser(state),
        firebaseApp: getFirebaseApp(state),
        error: getLoginError(state)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
