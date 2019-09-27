import React from 'react';
import {Link} from 'react-router-dom';
import SignOut from "../../Ui/SignOut/SignOut";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import './Navigation.css';
import * as ROUTES from '../../../constants/routes';
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
                        <SignOut/>
                    </MenuItem>
                </Menu>
            </div>


        </Container>
    );
}

export default Navigation;
