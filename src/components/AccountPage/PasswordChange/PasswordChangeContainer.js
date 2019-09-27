import {getFirebaseApp} from "../../../redux/selectors";
import {connect} from "react-redux";
import PasswordChange from "./PasswordChange";

const mapStateToProps = state => {
    return {
        firebaseApp: getFirebaseApp(state)
    };
};

export default connect(mapStateToProps)(PasswordChange);
