import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import SignOut from "./SignOut";
import {connect} from "react-redux";
import {getAuthUser} from "../redux/selectors";


function Navigation(props) {
    return (
        <div>{props.authUser ? <NavigationAuth/> : <NavigationNonAuth/>}</div>
    );
}

const NavigationAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li><SignOut/></li>
    </ul>
);

const NavigationNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </li>
    </ul>
);

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(Navigation);
