import {getError, getSuccessMessage} from "../../redux/selectors";
import {connect} from "react-redux";
import PasswordForgetPage from "./PasswordForgetPage";
import {resetPassword} from "../../redux/actions/authActions";


const mapDispatchToProps = {
    resetPassword
};
const mapStateToProps = state => {
    return {
        successMessage: getSuccessMessage(state),
        error: getError(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForgetPage);