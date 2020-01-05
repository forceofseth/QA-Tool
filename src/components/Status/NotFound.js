import React from "react";
import Container from "@material-ui/core/Container";
import image from './404-dogo.jpg';

const NotFound = () => (
    <Container maxWidth="lg" className="mainContainer notFound">
        <h1 className="title notFound">DAMN! Something went horribly wrong!</h1>

        <p>Apparently you are looking for something non-existent..</p>
        <p>Better luck next time.</p>
        <img src={image} alt=""/>

    </Container>
);

export default NotFound;
