import {getAuthProfile} from "../../../redux/selectors";
import {connect} from "react-redux";
import CommentForm from "./CommentForm";
import {createNewComment} from "../../../redux/actions/caseActions";


const mapDispatchToProps = {
    createNewComment
};

const mapStateToProps = state => {
    return {
        profile: getAuthProfile(state)
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm);