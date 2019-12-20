import {getAuth, getUserListData} from "../../../../redux/selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import EditUser from "./EditUser";
import {updateUser} from "../../../../redux/actions/authActions";

const mapDispatchToProps = {
    updateUser
};

const mapStateToProps = (state, ownProps) => {
    const UserId = ownProps.match.params.id;
    const userListData = getUserListData(state);
    let userToEdit = userListData ?  userListData[UserId]: null;
    userToEdit = userToEdit ? {...userToEdit, id: UserId}: null;
    return {
        auth: getAuth(state),
        userToEdit: userToEdit
    };
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(EditUser);