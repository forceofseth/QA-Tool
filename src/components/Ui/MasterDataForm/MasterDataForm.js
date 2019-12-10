import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function MasterDataForm(props){

    const {onSubmit, state, onChange} = props;
    const isInvalid =
        state.customer === '' ||
        state.projectId === '' ||
        state.product === '';

    return(
        <div>
            <form onSubmit={onSubmit}>
                <TextField
                    name="customer"
                    value={state.customer}
                    onChange={onChange}
                    type="text"
                    placeholder="Customer"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="projectId"
                    value={state.projectId}
                    onChange={onChange}
                    type="text"
                    placeholder="Layout ID"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="product"
                    value={state.product}
                    onChange={onChange}
                    type="text"
                    placeholder="Product"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <Button disabled={isInvalid} type="submit" color="primary" variant="contained">
                    Save Masterdata
                </Button>
            </form>
        </div>
    );
}

export default MasterDataForm;