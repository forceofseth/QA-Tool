import React from 'react';
import Container from "@material-ui/core/Container";
import '../global.css';
import './CommentPage.css'
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CommentForm from "../Ui/CommentForm/CommentForm";
import {HOME} from "../../constants/routes";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function CommentPage(props) {
    useAuthorizationRedirect(props.auth);
    return(
        <Container maxWidth="lg" className="mainContainer">
            <h1 className="title">Comments for Case XYZ</h1>
            <Link to={HOME} className="backButton">
                <Button color="primary" variant="contained">
                    <span>BACK</span>
                </Button>
            </Link>
            <CommentForm/>
            <div className="chat">
                <div className="messages">
                    <div className="message">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi est et expedita molestias, ratione voluptate voluptatum! Culpa iusto molestiae mollitia officia. Ab ducimus facere, magnam modi possimus tenetur. Doloribus ipsum iusto neque quis?</p>
                        <div className="contributer">
                            <strong>Lukas Kiefer</strong>, <em>12.12.2019</em>
                        </div>
                    </div>
                    <div className="message">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores, magni. Asperiores eligendi, eos in quidem quisquam veniam!</p>
                        <div className="contributer">
                            <strong>Milos Djuric</strong>, <em>10.12.2019</em>
                        </div>
                    </div>
                    <div className="message">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur modi neque odit reprehenderit voluptatum! Assumenda blanditiis consectetur culpa cumque dolorem doloremque error exercitationem fugiat illum impedit ipsam laudantium libero non, nostrum numquam odit possimus praesentium quas quo repellat rerum suscipit tempore totam ut voluptas? Commodi, consequatur cum facere labore nisi odio sed soluta voluptates. Aspernatur dignissimos dolores et explicabo facere illo inventore omnis placeat temporibus voluptatibus!</p>
                        <div className="contributer">
                            <strong>Milos Djuric</strong>, <em>01.12.2019</em>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default CommentPage;
