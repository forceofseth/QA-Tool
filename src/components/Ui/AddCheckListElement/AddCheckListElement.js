import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import './AddCheckListElement.css'

function AddCheckListElement(props){
    const {checkType, caseId, addCheckListElement,currentChecks} = props;
    const INITIAL_STATE ={
        newCheckListElement: ''
    };
    const [state, setState] = useState(INITIAL_STATE);

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        addCheckListElement(state.newCheckListElement, caseId, checkType, currentChecks);
        setState(INITIAL_STATE);
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <TextField
                    name="newCheckListElement"
                    onChange={onChange}
                    type="text"
                    placeholder="New checklist element"
                    margin="normal"
                    variant="outlined"
                    value={state.newCheckListElement}
                    required
                />

                <Button className="newCheckListBtn" type="submit" color="primary" variant="contained">
                    <AddCircleOutlineOutlinedIcon  fontSize="large"/>
                </Button>
            </form>
        </div>
    );
}

export default AddCheckListElement;