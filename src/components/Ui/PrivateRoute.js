import React from "react";
import {Route} from "react-router-dom";
import {SIGN_IN} from "../../constants/routes";
import {Redirect} from "react-router-dom";
import {getAuth} from "../../redux/selectors";
import connect from "react-redux/lib/connect/connect";
import Loading from "../Status/Loading";

const PrivateRoute = ({component: RouteComponent, auth, ...rest}) => {
    return <Route
        {...rest}
        render={routeProps =>
            !auth || !auth.isLoaded ? <Loading/> : (
                auth.isEmpty ?
                    <Redirect to={SIGN_IN}/>
                    :
                    <RouteComponent {...routeProps} />
            )
        }
    />;
};

const mapStateToProps = state => {
    return {
        auth: getAuth(state)
    };

};

export default connect(mapStateToProps)(PrivateRoute);