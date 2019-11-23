import {getAuth, getCasesData} from "../../redux/selectors";
import {connect} from "react-redux";
import EditCasePage from "./EditCasePage";
import {updateCase} from "../../redux/actions/caseActions";

const mapDispatchToProps = {
    updateCase
};

const mapStateToProps = (state, ownProps) => {
    const caseId = ownProps.match.params.id;
    const cases = getCasesData(state);
    const caseToEdit = cases ?  cases[caseId]: null;
    return {
        auth: getAuth(state),
        caseToEdit: {...caseToEdit, id: caseId}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCasePage);