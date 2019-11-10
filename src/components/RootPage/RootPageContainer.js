import {getAuth} from "../../redux/selectors";
import {createFirebaseApp} from "../../redux/actions/authActions";
import {connect} from "react-redux";
import RootPage from "./RootPage";

const mapStateToProps = state => {
    return {auth: getAuth(state)};
};

//TODO delete
const mapDispatchToProps = {
    createFirebaseApp
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);

