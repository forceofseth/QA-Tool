import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignOut from "./SignOut";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import './Navigation.css';
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


function Navigation() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (

        <Container maxWidth="lg">
            <CssBaseline/>

            <div>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to="home">
                        Home
                    </MenuItem>
                    <MenuItem component={Link} to="account">
                        Account
                    </MenuItem>
                    <MenuItem component={Link} to="/">
                        <SignOut/>
                    </MenuItem>
                </Menu>
            </div>


        </Container>
    );
}

export default Navigation;
