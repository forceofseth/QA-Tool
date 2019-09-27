import {getAuthUser} from "../../../redux/selectors";
import {connect} from "react-redux";
import AddUser from "./AddUser";

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(AddUser);