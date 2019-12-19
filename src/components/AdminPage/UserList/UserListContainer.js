import {getAuth, getUserList} from "../../../redux/selectors";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import UserList from "./UserList";

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
        userList: getUserList(state)
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'users'}
    ])
)(UserList);
