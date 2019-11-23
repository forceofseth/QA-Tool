import {getAuthProfile} from "../../../redux/selectors";
import connect from "react-redux/lib/connect/connect";
import Navigation from "./Navigation";

const mapStateToProps = state => {
    return {
        profile: getAuthProfile(state)
    };

};

export default connect(mapStateToProps)(Navigation);