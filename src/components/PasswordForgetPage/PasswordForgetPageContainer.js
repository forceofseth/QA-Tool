import {getFirebaseApp} from "../../redux/selectors";
import {connect} from "react-redux";
import PasswordForgetPage from "./PasswordForgetPage";

const mapStateToProps = state => {
    return {firebaseApp: getFirebaseApp(state)};
};

export default connect(mapStateToProps)(PasswordForgetPage);