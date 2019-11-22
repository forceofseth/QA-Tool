import {getAuthError, getAuthSuccessMessage, getCasesError, getCasesSuccessMessage} from "../../../redux/selectors";
import {connect} from "react-redux";
import SimpleSnackbar from "./SimpleSnackbar";
import {cleanAuthErrorAction, cleanAuthSuccessAction} from "../../../redux/actions/authActions";
import {cleanCaseErrorAction, cleanCaseSuccessAction} from "../../../redux/actions/caseActions";

const mapDispatchToProps = {
    cleanAuthErrorAction,
    cleanAuthSuccessAction,
    cleanCaseSuccessAction,
    cleanCaseErrorAction
};

const mapStateToProps = state =>{
    return {
        authError: getAuthError(state),
        authSuccess: getAuthSuccessMessage(state),
        casesError: getCasesError(state),
        casesSuccess: getCasesSuccessMessage(state)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);