import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import './AddCheckListElement.css'

function AddCheckListElement(props){
    const {checkType, caseId, addCheckListElement,currentChecks} = props;
    const initialState ={
        newCheckListElement: ''
    };
    const [state, setState] = useState(initialState);

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        addCheckListElement(state.newCheckListElement, caseId, checkType, currentChecks);
        setState(initialState);
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