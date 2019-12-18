import AddCheckListElement from "./AddCheckListElement";
import {connect} from "react-redux";
import {addCheckListElement} from "../../../redux/actions/caseActions";


const mapDispatchToProps = {
    addCheckListElement
};

export default connect(null,mapDispatchToProps)(AddCheckListElement);