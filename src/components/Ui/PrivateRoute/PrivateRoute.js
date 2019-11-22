import React from "react";
import {Route} from "react-router-dom";
import {SIGN_IN} from "../../../constants/routes";
import {Redirect} from "react-router-dom";
import Loading from "../../Status/Loading";

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

export default PrivateRoute;