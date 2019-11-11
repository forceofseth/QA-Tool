import {getAuth} from "../../redux/selectors";
import {connect} from "react-redux";
import AccountPage from "./AccountPage";

const mapStateToProps = state => {
    return {auth: getAuth(state)};
};

export default connect(mapStateToProps)(AccountPage);
