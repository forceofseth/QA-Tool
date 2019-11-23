import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleSnackbarContainer from "../Snackbar/SimpleSnackbarContainer";
import Container from "@material-ui/core/Container";
import React from "react";

function CaseForm(props){

    const {onSubmit, state, onChange, title} = props;
    const isInvalid =
        state.approved === '' ||
        state.customer === '' ||
        state.date === '' ||
        state.projectId === '' ||
        state.lead === '' ||
        state.product === '' ||
        state.web === '';

    return(
        <Container maxWidth="lg" className="mainContainer">
            <CssBaseline/>
            <h1>{title}</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        name="approved"
                        value={state.approved}
                        onChange={onChange}
                        type="text"
                        placeholder="approved"
                    />
                    <input
                        name="customer"
                        value={state.customer}
                        onChange={onChange}
                        type="text"
                        placeholder="customer"
                    />
                    <input
                        name="date"
                        value={state.date}
                        onChange={onChange}
                        type="date"
                        placeholder="date"
                    />
                    <input
                        name="projectId"
                        value={state.projectId}
                        onChange={onChange}
                        type="text"
                        placeholder="id"
                    />
                    <input
                        name="lead"
                        value={state.lead}
                        onChange={onChange}
                        type="text"
                        placeholder="lead"
                    />
                    <input
                        name="product"
                        value={state.product}
                        onChange={onChange}
                        type="text"
                        placeholder="product"
                    />
                    <input
                        name="web"
                        value={state.web}
                        onChange={onChange}
                        type="text"
                        placeholder="web"
                    />
                    <button
                        type="submit"
                        disabled={isInvalid}
                    >Save Case
                    </button>
                </form>
                <SimpleSnackbarContainer/>
            </div>
        </Container>
    );
}

export default CaseForm;