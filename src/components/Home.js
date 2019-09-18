import React from 'react';
import {useAuthorizationRedirect} from "../hooks/useAuthorizationRedirect";
import {getAuthUser} from "../redux/selectors";
import {connect} from "react-redux";
import Forbidden from "./Forbidden";

function Home(props) {
    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);

    return (
        <div>{props.authUser ? <HomeAuth/> : <Forbidden/>}</div>

    );
}

const HomeAuth = () => (
    <div>
        <h1>Home</h1>
    </div>
);

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};


export default connect(mapStateToProps)(Home);
