import {getAuth} from "../../../redux/selectors";
import connect from "react-redux/lib/connect/connect";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = state => {
    return {
        auth: getAuth(state)
    };

};

export default connect(mapStateToProps)(PrivateRoute);