import {getAuth} from "../../redux/selectors";
import {connect} from "react-redux";
import AddCasePage from "./AddCasePage";
import {createCase} from "../../redux/actions/caseActions";

const mapDispatchToProps = {
    createCase
};


const mapStateToProps = state => {
    return {
        auth: getAuth(state)
    };

};


export default connect(mapStateToProps, mapDispatchToProps)(AddCasePage);