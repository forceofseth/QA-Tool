import {getAuth, getMasterDataError, getMasterDataSuccessMessage} from "../../../../redux/selectors";
import {connect} from "react-redux";
import {createMasterData} from "../../../../redux/actions/masterDataAction";
import AddMasterData from "./AddMasterData";

const mapDispatchToProps = {
    createMasterData
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        masterDataError: getMasterDataError(state),
        masterDataSuccess: getMasterDataSuccessMessage(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMasterData);