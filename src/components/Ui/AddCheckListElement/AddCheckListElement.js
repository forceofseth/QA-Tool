import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import './AddCheckListElement.css'

function AddCheckListElement(props){

    const {onSubmit, onChange} = props;

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