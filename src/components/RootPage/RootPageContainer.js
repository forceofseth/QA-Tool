import {getAuthUser} from "../../redux/selectors";
import {createFirebaseApp} from "../../redux/actions/firebaseActions";
import {connect} from "react-redux";
import RootPage from "./RootPage";

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

const mapDispatchToProps = {
    createFirebaseApp
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);

