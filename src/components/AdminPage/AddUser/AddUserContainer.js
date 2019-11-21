import {getAuth} from "../../../redux/selectors";
import {connect} from "react-redux";
import AddUser from "./AddUser";

const mapStateToProps = state => {
    return {
        auth: getAuth(state),
    };
};

export default connect(mapStateToProps)(AddUser)