import {getAuth, getCases} from "../../redux/selectors";
import {connect} from "react-redux";
import HomePage from "./HomePage";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        cases: getCases(state)
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {
            collection: 'cases',
        }
    ])
)(HomePage);
