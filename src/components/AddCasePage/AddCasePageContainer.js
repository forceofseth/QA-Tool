import {getAuth, getCasesError, getCasesSuccessMessage, getMasterData} from "../../redux/selectors";
import {connect} from "react-redux";
import AddCasePage from "./AddCasePage";
import {createCase} from "../../redux/actions/caseActions";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const mapDispatchToProps = {
    createCase
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        casesError: getCasesError(state),
        casesSuccess: getCasesSuccessMessage(state),
        masterData: getMasterData(state)
    };

};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'masterdata'}
    ])
)(AddCasePage);