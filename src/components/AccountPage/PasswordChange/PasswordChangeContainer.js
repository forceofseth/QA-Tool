import {getAuthError, getAuthSuccessMessage} from "../../../redux/selectors";
import {connect} from "react-redux";
import PasswordChange from "./PasswordChange";
import {changePassword} from "../../../redux/actions/authActions";


const mapDispatchToProps = {
    changePassword
};

const mapStateToProps = state => {
    return {
        successMessage: getAuthSuccessMessage(state),
        error: getAuthError(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChange);
