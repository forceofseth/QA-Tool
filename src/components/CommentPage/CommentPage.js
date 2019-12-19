import React from 'react';
import Container from "@material-ui/core/Container";
import '../global.css';
import './CommentPage.css'
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import {HOME} from "../../constants/routes";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import moment from "moment";
import CommentFormContainer from "../Ui/CommentForm/CommentFormContainer";
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";

function CommentPage(props) {
    useAuthorizationRedirect(props.auth);
    const comments = props.comments && Object.entries(props.comments);
    return(
        <Container maxWidth="lg" className="mainContainer">
            <h1 className="title">Comments for {props.customer}</h1>
            <Link to={HOME} className="backButton">
                <Button color="primary" variant="contained">
                    <span>BACK</span>
                </Button>
            </Link>
            <CommentFormContainer caseId={props.caseId} currentComments={props.comments} commentCounter={props.commentCounter}/>
            <div className="chat">
                <div className="messages">
                    {comments && comments.map(comment =>{
                        return(
                        <div className="message" key={comment[0]}>
                            <p>{comment[1].content}</p>
                            <div className="contributer">
                                <strong>{comment[1].author}</strong>, <em>{moment(comment[1].date).format('DD.MM.YY HH:mm')}</em>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            <SimpleSnackbarContainer/>
        </Container>
    );
}

export default CommentPage;
