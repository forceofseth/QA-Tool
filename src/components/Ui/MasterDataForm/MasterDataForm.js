import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleSnackbarContainer from "../Snackbar/SimpleSnackbarContainer";
import Container from "@material-ui/core/Container";
import React from "react";

function MasterDataForm(props){

    const {onSubmit, state, onChange, title} = props;
    const isInvalid =
        state.customer === '' ||
        state.projectId === '' ||
        state.product === '';

    return(
        <Container maxWidth="lg" className="mainContainer">
            <CssBaseline/>
            <h1>{title}</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        name="customer"
                        value={state.customer}
                        onChange={onChange}
                        type="text"
                        placeholder="customer"
                    />
                    <input
                        name="projectId"
                        value={state.projectId}
                        onChange={onChange}
                        type="text"
                        placeholder="id"
                    />
                    <input
                        name="product"
                        value={state.product}
                        onChange={onChange}
                        type="text"
                        placeholder="product"
                    />
                    <button
                        type="submit"
                        disabled={isInvalid}
                    >Save Masterdata
                    </button>
                </form>
                <SimpleSnackbarContainer/>
            </div>
        </Container>
    );
}

export default MasterDataForm;