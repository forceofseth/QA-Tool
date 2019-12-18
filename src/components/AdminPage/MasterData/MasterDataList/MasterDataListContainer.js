import {getAuth, getMasterData} from "../../../../redux/selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import MasterDataList from "./MasterDataList";
import {deleteMasterData} from "../../../../redux/actions/masterDataActions";

const mapDispatchToProps = {
    deleteMasterData
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        masterData: getMasterData(state)
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'masterdata'}
    ])
)(MasterDataList);
