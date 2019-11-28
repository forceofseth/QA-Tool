import {getAuth, getCasesData} from "../../../redux/selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {updateCaseChecklist} from "../../../redux/actions/caseActions";
import WebCheckList from "./WebCheckList";


const mapDispatchToProps = {
    updateCaseChecklist
};


const mapStateToProps = (state, ownProps) => {
    const caseId = ownProps.match.params.id;
    const cases = getCasesData(state);
    const webChecks = cases ? cases[caseId].webChecks : null;
    return {
        auth: getAuth(state),
        webChecks: webChecks,
        caseId: caseId
    };
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'cases'}
    ])
)(WebCheckList);