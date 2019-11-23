import {getAuth, getCasesData} from "../../redux/selectors";
import {connect} from "react-redux";
import EditCasePage from "./EditCasePage";
import {updateCase} from "../../redux/actions/caseActions";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const mapDispatchToProps = {
    updateCase
};

const mapStateToProps = (state, ownProps) => {
    const caseId = ownProps.match.params.id;
    const cases = getCasesData(state);
    const caseToEdit = cases ?  cases[caseId]: {};
    return {
        auth: getAuth(state),
        caseToEdit: {...caseToEdit, id: caseId}
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'cases'}
    ])
)(EditCasePage);