import React from 'react';
import {Link} from 'react-router-dom';
import SignOutContainer from "../../Ui/SignOut/SignOutContainer";
import Container from "@material-ui/core/Container";
import {ACCOUNT, ADMIN} from "../../../constants/routes";
import './Navigation.css';
import {LockOpenOutlined, PermIdentityOutlined, HomeOutlined} from "@material-ui/icons";

function Navigation() {
    return (
        <Container maxWidth="xl" className="navContainer">
            <Container className="navInnerContainer">

                <a href="/">
                    <h1>
                        QA Tool
                    </h1>
                </a>

                <div className="menuRight">
                    <a href="/">
                        <HomeOutlined className="topIcon" fontSize="large"/>
                    </a>

                    <Link to={ACCOUNT}>
                        <PermIdentityOutlined className="topIcon" fontSize="large"/>
                    </Link>


                    <Link to={ADMIN}>
                        <LockOpenOutlined className="topIcon" fontSize="large"/>
                    </Link>

                    <SignOutContainer/>

                </div>



            </Container>

        </Container>


    );
}

export default Navigation;
