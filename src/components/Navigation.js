import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignOut from "./SignOut";

function Navigation() {
    return (
        <ul>
            <li>
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
            </li>
            <li><SignOut/></li>
        </ul>
    );
}

export default Navigation;
