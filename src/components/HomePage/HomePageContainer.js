import {getAuthUser, getCases} from "../../redux/selectors";
import {connect} from "react-redux";
import HomePage from "./HomePage";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const mapStateToProps = state => {
    return {
        authUser: getAuthUser(state),
        cases: getCases(state)
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'cases'}
    ])
)(HomePage);
