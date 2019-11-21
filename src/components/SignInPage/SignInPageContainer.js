import {loginUser} from "../../redux/actions/authActions";
import {getAuth, getError} from "../../redux/selectors";
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
        error: getError(state)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
