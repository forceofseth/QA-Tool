import {getAuthUser} from "../../redux/selectors";
import {connect} from "react-redux";
import AddCasePage from "./AddCasePage";
import {createCase} from "../../redux/actions/firestoreActions";

const mapDispatchToProps = {
    createCase
};


const mapStateToProps = state => {
    return {
        authUser: getAuthUser(state)
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(AddCasePage);