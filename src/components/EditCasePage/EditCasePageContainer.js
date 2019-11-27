import {getAuth, getCasesData} from "../../redux/selectors";
import {connect} from "react-redux";
import EditCasePage from "./EditCasePage";
import {updateCase} from "../../redux/actions/caseActions";
import moment from "moment";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const mapDispatchToProps = {
    updateCase
};

const mapStateToProps = (state, ownProps) => {
    const caseId = ownProps.match.params.id;
    const cases = getCasesData(state);
    let caseToEdit = cases ?  cases[caseId]: null;
    caseToEdit =caseToEdit ? {...caseToEdit, id: caseId, date: moment(caseToEdit.date.toDate()).format('YYYY-MM-DD')}: null;
    return {
        auth: getAuth(state),
        caseToEdit: caseToEdit
    };
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'cases'}
    ])
)(EditCasePage);