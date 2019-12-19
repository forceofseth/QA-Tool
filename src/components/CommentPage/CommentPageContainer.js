import {getAuth, getCommentCounterById, getCommentsById, getCustomerById} from "../../redux/selectors";
import {connect} from "react-redux";
import CommentPage from "./CommentPage";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

const mapStateToProps = (state, ownProps) => {
    const caseId = ownProps.match.params.id;

    return {
        auth: getAuth(state),
        comments: getCommentsById(state, caseId),
        commentCounter: getCommentCounterById(state, caseId),
        customer: getCustomerById(state,caseId),
        caseId: caseId
    };
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'cases'}
    ])
)(CommentPage);
