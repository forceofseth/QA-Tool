import SimpleSnackbarContainer from "../Snackbar/SimpleSnackbarContainer";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function CaseForm(props) {

    const {onSubmit, state, onChange} = props;
    const isInvalid =
        state.customer === '' ||
        state.projectId === '' ||
        state.lead === '' ||
        state.product === '' ||
        state.web === '';



    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField
                    className="customer-js"
                    name="customer"
                    value={state.customer}
                    onChange={onChange}
                    type="text"
                    label="Customer"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="projectId"
                    className="projectId-js"
                    value={state.projectId}
                    onChange={onChange}
                    type="text"
                    label="Layout ID"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="product"
                    className="product-js"
                    value={state.product}
                    onChange={onChange}
                    type="text"
                    label="Product"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="lead"
                    value={state.lead}
                    onChange={onChange}
                    type="text"
                    label="Lead"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <TextField
                    name="web"
                    value={state.web}
                    onChange={onChange}
                    type="text"
                    label="Web"
                    margin="normal"
                    variant="outlined"
                    required
                    fullWidth
                />
                <Button
                    type="submit"
                    disabled={isInvalid}
                    color="primary"
                    margin="normal"
                    variant="contained"
                >Save Case
                </Button>
            </form>
            <SimpleSnackbarContainer/>
        </div>



    );
}

export default CaseForm;
