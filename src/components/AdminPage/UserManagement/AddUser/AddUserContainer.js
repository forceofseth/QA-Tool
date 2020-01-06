import {getAuth, getAuthError, getAuthSuccessMessage} from "../../../../redux/selectors";
import {connect} from "react-redux";
import AddUser from "./AddUser";
import {createUser} from "../../../../redux/actions/authActions";

const mapDispatchToProps = {
    createUser
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        successMessage: getAuthSuccessMessage(state),
        error: getAuthError(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)