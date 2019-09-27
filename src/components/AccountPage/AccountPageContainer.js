import {getAuthUser} from "../../redux/selectors";
import {connect} from "react-redux";
import AccountPage from "./AccountPage";

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(AccountPage);
