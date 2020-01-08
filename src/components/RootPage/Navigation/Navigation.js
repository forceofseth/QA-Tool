import React from 'react';
import {Link} from 'react-router-dom';
import SignOutContainer from "../../Ui/SignOut/SignOutContainer";
import Container from "@material-ui/core/Container";
import {ACCOUNT, ADMIN} from "../../../constants/routes";
import './Navigation.css';
import {PermIdentityOutlined, HomeOutlined, Settings} from "@material-ui/icons";
import Tooltip from "@material-ui/core/Tooltip";

function Navigation(props) {
    const {profile} = props;

    return (
        <Container maxWidth="xl" className="navContainer">
            <Container className="navInnerContainer">
                <p className="greeting">Hi {profile.firstName}, how are you today?</p>
                <div>
                    <a href="/">
                        <h1>
                            QA Tool
                        </h1>
                    </a>
                </div>

                <div className="menuRight">
                    <Tooltip title="Home">
                        <a href="/">
                            <HomeOutlined className="topIcon" fontSize="large"/>
                        </a>
                    </Tooltip>
                    <Tooltip title="Account">
                        <Link to={ACCOUNT}>
                            <PermIdentityOutlined className="topIcon" fontSize="large"/>
                        </Link>
                    </Tooltip>
                    {!profile || !profile.isLoaded ? null : (
                        profile.admin ?
                            <Tooltip title="Admin">
                                <Link to={ADMIN}>
                                    <Settings className="topIcon" fontSize="large"/>
                                </Link>
                            </Tooltip>
                            : null)
                    }
                    <SignOutContainer/>

                </div>
            </Container>
        </Container>
    );
}

export default Navigation;
