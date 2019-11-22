import React from "react";
import {Route} from "react-router-dom";
import {SIGN_IN} from "../../../constants/routes";
import {Redirect} from "react-router-dom";
import Loading from "../../Status/Loading";

const AdminRoute = ({component: RouteComponent, profile, ...rest}) => {
    return <Route
        {...rest}
        render={routeProps =>
            !profile || !profile.isLoaded ? <Loading/> : (
                profile.admin ?
                    <RouteComponent {...routeProps} />
                    :
                    <Redirect to={SIGN_IN}/>
            )
        }
    />;
};

export default AdminRoute;