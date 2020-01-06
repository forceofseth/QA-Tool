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
    const singleCase = cases ? cases[caseId] : null;
    return {
        auth: getAuth(state),
        webChecks: webChecks,
        caseId: caseId,
        singleCase: singleCase
    };
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'cases'}
    ])
)(WebCheckList);