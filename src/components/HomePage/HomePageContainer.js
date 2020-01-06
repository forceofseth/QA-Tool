import {getAuth, getCases} from "../../redux/selectors";
import {connect} from "react-redux";
import HomePage from "./HomePage";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {updateCaseArchiveState} from "../../redux/actions/caseActions";


const mapDispatchToProps = {
    updateCaseArchiveState
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        cases: getCases(state)
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'cases',
        }
    ])
)(HomePage);
