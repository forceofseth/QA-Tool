import {getAuth, getCasesData} from "../../../redux/selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import LeadCheckList from "./LeadCheckList";
import {updateCaseChecklist} from "../../../redux/actions/caseActions";


const mapDispatchToProps = {
    updateCaseChecklist
};


const mapStateToProps = (state, ownProps) => {
    const caseId = ownProps.match.params.id;
    const cases = getCasesData(state);
    const leadChecks = cases ? cases[caseId].leadChecks : null;
    return {
        auth: getAuth(state),
        leadChecks: leadChecks,
        caseId: caseId
    };
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'cases'}
    ])
)(LeadCheckList);