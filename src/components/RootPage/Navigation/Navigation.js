import React from 'react';
import {Link} from 'react-router-dom';
import SignOutContainer from "../../Ui/SignOut/SignOutContainer";
import Container from "@material-ui/core/Container";
import * as ROUTES from '../../../constants/routes';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import './Navigation.css';


function Navigation() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (


        <Box component="span">

            <Container maxWidth="xl" className="navContainer">

                <Container className="navInnerContainer">

                    <h1>
                        QA Tool
                    </h1>

                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="menuBtn">
                        Username
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} to={ROUTES.HOME}>
                            Home
                        </MenuItem>
                        <MenuItem component={Link} to={ROUTES.ACCOUNT}>
                            Account
                        </MenuItem>
                        <MenuItem component={Link} to={ROUTES.ADD_USER}>
                            Add New User
                        </MenuItem>
                        <MenuItem component={Link} to={ROUTES.ADD_CASE}>
                            Add Case
                        </MenuItem>
                        <MenuItem component={Link} to={ROUTES.EDIT_CASE}>
                            Edit Case
                        </MenuItem>
                        <MenuItem>
                            <SignOutContainer/>
                        </MenuItem>
                    </Menu>


                </Container>

            </Container>


        </Box>





    );
}

export default Navigation;
