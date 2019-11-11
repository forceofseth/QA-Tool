import {getAuth} from "../../redux/selectors";
import {connect} from "react-redux";
import RootPage from "./RootPage";

const mapStateToProps = state => {
    return {auth: getAuth(state)};
};

export default connect(mapStateToProps)(RootPage);

