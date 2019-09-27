import {getAuthUser} from "../../redux/selectors";
import {connect} from "react-redux";
import EditCasePage from "./EditCasePage";

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(EditCasePage);