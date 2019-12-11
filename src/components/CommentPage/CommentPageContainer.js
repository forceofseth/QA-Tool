import {getAuth} from "../../redux/selectors";
import {connect} from "react-redux";
import CommentPage from "./CommentPage";

const mapStateToProps = state => {
    return {auth: getAuth(state)};
};

export default connect(mapStateToProps)(CommentPage);
