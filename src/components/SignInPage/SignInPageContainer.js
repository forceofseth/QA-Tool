import {loginUser} from "../../redux/actions/authActions";
import {getAuth, getLoginError} from "../../redux/selectors";
import {connect} from "react-redux";
import SignInPage from "./SignInPage";
import '../global.css';
import './SignInPage.css';


const mapDispatchToProps = {
    loginUser
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        error: getLoginError(state)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
