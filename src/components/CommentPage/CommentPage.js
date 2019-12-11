import React from 'react';
import Container from "@material-ui/core/Container";
import '../global.css';
import './CommentPage.css'
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function CommentPage(props) {
    useAuthorizationRedirect(props.auth);
    return(
        <Container maxWidth="lg" className="mainContainer">
            <h1>Comments for Case XYZ</h1>
            <div className="addComment">
                <Link to="/">
                    <Button color="primary" variant="contained">
                        <span>Add Comment</span>
                        <AddCircleOutlineOutlinedIcon className="addCaseIcon" fontSize="large"/>
                    </Button>
                </Link>
            </div>
            <div className="chat">
                <div className="userA messages">
                    <div className="message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias at dolor dolorem ea esse explicabo illo inventore magni maxime nesciunt nobis non officiis, quibusdam quidem ratione, temporibus vero vitae.
                        <strong><p>Lukas Kiefer</p></strong>
                    </div>
                </div>
                <div className="userB messages">
                    <div className="message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius hic ipsa laborum tempore voluptates. Ad, dolorem, obcaecati. Deserunt distinctio dolores explicabo fuga, iste maiores mollitia, perferendis quasi quia repellat voluptatibus!!
                        <strong><p>Milos Djuric</p></strong>
                    </div>
                    <div className="message">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque autem dolore iste nam, odio odit sit vitae voluptatem. Ab cumque cupiditate ducimus natus odio officia quia quibusdam ullam voluptatum.
                        <strong><p>Milos Djuric</p></strong>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default CommentPage;
