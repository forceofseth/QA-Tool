import React from 'react';
import {Link} from 'react-router-dom';
import SignOutContainer from "../../Ui/SignOut/SignOutContainer";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {ACCOUNT} from "../../../constants/routes";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import './Navigation.css';




function Navigation() {


    return (
        <Box>
            <Container maxWidth="xl" className="navContainer">
                <Container className="navInnerContainer">

                    {/* title left */}
                    <a href="/">
                        <h1>
                            QA Tool
                        </h1>
                    </a>

                    {/* menu right */}
                    <div className="menuRight">
                        <a href="/">
                            <HomeOutlinedIcon className="topIcon" fontSize="large"/>
                        </a>

                        <Link to={ACCOUNT}>
                            <PermIdentityOutlinedIcon className="topIcon" fontSize="large"/>
                        </Link>

                        <SignOutContainer/>
                    </div>



                </Container>

            </Container>


        </Box>


    );
}

export default Navigation;
