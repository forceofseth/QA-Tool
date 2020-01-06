import {getAuth, getMasterDataData} from "../../../../redux/selectors";
import {connect} from "react-redux";
import {updateMasterData} from "../../../../redux/actions/masterDataActions";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import EditMasterDataPage from "./EditMasterDataPage";

const mapDispatchToProps = {
    updateMasterData
};

const mapStateToProps = (state, ownProps) => {
    const masterDataId = ownProps.match.params.id;
    const masterData = getMasterDataData(state);
    let masterDataToEdit = masterData ?  masterData[masterDataId]: null;
    masterDataToEdit = masterDataToEdit ? {...masterDataToEdit, id: masterDataId}: null;
    return {
        auth: getAuth(state),
        masterDataToEdit: masterDataToEdit
    };
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'masterdata'}
    ])
)(EditMasterDataPage);