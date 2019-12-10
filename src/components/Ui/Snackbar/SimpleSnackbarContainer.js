import {
    getAuthError,
    getAuthSuccessMessage,
    getCasesError,
    getCasesSuccessMessage,
    getMasterDataError,
    getMasterDataSuccessMessage
} from "../../../redux/selectors";
import {connect} from "react-redux";
import SimpleSnackbar from "./SimpleSnackbar";
import {cleanAuthErrorAction, cleanAuthSuccessAction} from "../../../redux/actions/authActions";
import {cleanCaseErrorAction, cleanCaseSuccessAction} from "../../../redux/actions/caseActions";
import {cleanMasterDataErrorAction, cleanMasterDataSuccessAction} from "../../../redux/actions/masterDataActions";

const mapDispatchToProps = {
    cleanAuthErrorAction,
    cleanAuthSuccessAction,
    cleanCaseSuccessAction,
    cleanCaseErrorAction,
    cleanMasterDataErrorAction,
    cleanMasterDataSuccessAction
};

const mapStateToProps = state =>{
    return {
        authError: getAuthError(state),
        authSuccess: getAuthSuccessMessage(state),
        casesError: getCasesError(state),
        casesSuccess: getCasesSuccessMessage(state),
        masterDataError: getMasterDataError(state),
        masterDataSuccess: getMasterDataSuccessMessage(state)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SimpleSnackbar);