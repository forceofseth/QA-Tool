import {getAuth} from "../../redux/selectors";
import {connect} from "react-redux";
import EditCasePage from "./EditCasePage";

const mapStateToProps = state => {
    return {auth: getAuth(state)};
};

export default connect(mapStateToProps)(EditCasePage);