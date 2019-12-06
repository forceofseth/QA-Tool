import {getAuth, getMasterDataData} from "../../../../redux/selectors";
import {connect} from "react-redux";
import {updateMasterData} from "../../../../redux/actions/masterDataAction";
import moment from "moment";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import EditMasterData from "./EditMasterData";

const mapDispatchToProps = {
    updateMasterData
};

const mapStateToProps = (state, ownProps) => {
    const masterDataId = ownProps.match.params.id;
    const masterdata = getMasterDataData(state);
    let masterDataToEdit = masterdata ?  masterdata[masterDataId]: null;
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
)(EditMasterData);