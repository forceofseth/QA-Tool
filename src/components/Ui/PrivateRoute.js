import React from "react";
import {Route, Redirect} from "react-router-dom";
import {getAuth} from "../../redux/selectors";
import {SIGN_IN} from "../../constants/routes";
import {connect} from "react-redux";

const PrivateRoute = ({component: RouteComponent, auth, ...rest}) => {
    return (
        <Route
            {...rest}
            render={routeProps =>
                !auth.isLoaded && auth.isEmpty ? (
                    <Redirect to={SIGN_IN}/>
                ) : (
                    <RouteComponent {...routeProps} />
                )
            }
        />
    );
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state)
    };

};

export default connect(mapStateToProps)(PrivateRoute);