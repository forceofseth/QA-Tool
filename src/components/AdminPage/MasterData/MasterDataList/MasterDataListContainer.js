import {getAuth, getMasterData} from "../../../../redux/selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import MasterDataList from "./MasterDataList";

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        masterdata: getMasterData(state)
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'masterdata'}
    ])
)(MasterDataList);
