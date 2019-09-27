import {getAuthUser} from "../../redux/selectors";
import {connect} from "react-redux";
import AddCasePage from "./AddCasePage";

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(AddCasePage);