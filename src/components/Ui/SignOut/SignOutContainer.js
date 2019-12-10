import {logoutUser} from "../../../redux/actions/authActions";
import {connect} from "react-redux";
import SignOut from "./SignOut";


const mapDispatchToProps = {
    logoutUser

};


export default connect(null, mapDispatchToProps)(SignOut);
