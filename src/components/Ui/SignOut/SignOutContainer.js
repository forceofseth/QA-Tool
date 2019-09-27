import {logoutUser} from "../../../redux/actions/firebaseActions";
import {connect} from "react-redux";
import SignOut from "./SignOut";

const mapDispatchToProps = {
    logoutUser
};

// noinspection JSUnusedLocalSymbols
const mapStateToProps = state => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
