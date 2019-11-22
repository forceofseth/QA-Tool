import {getAuthError, getAuthSuccessMessage} from "../../redux/selectors";
import {connect} from "react-redux";
import PasswordForgetPage from "./PasswordForgetPage";
import {resetPassword} from "../../redux/actions/authActions";


const mapDispatchToProps = {
    resetPassword
};
const mapStateToProps = state => {
    return {
        successMessage: getAuthSuccessMessage(state),
        error: getAuthError(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgetPage);