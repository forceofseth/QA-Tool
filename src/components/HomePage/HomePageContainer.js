import {getAuthUser} from "../../redux/selectors";
import {connect} from "react-redux";
import HomePage from "./HomePage";

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(HomePage);
