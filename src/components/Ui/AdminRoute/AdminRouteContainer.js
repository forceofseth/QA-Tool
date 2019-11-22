import {getAuthProfile} from "../../../redux/selectors";
import connect from "react-redux/lib/connect/connect";
import AdminRoute from "./AdminRoute";

const mapStateToProps = state => {
    return {
        profile: getAuthProfile(state)
    };

};

export default connect(mapStateToProps)(AdminRoute);