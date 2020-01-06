import {connect} from "react-redux";
import AdminPage from "./AdminPage";
import {getAuth} from "../../redux/selectors";

const mapStateToProps = state => {
    return {
        auth: getAuth(state)
    };
};

export default connect(mapStateToProps)(AdminPage);