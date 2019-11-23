import React, {useState} from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";
import moment from "moment";


//TODO Re-use form from AddCasePage and think of a concept
//how the edit works with the flow o the ui.
function EditCasePage(props) {
    useAuthorizationRedirect(props.auth);
    const {caseToEdit} = props;

    const [state, setState] = useState({...caseToEdit, date: moment(caseToEdit.date.toDate()).format('YYYY-MM-DD') });

    const isInvalid =
        state.approved === '' ||
        state.customer === '' ||
        state.date === '' ||
        state.projectId === '' ||
        state.lead === '' ||
        state.product === '' ||
        state.web === '';

    const onSubmit = event => {
        event.preventDefault();
        props.updateCase(state);
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };


    return (
        <Container maxWidth="lg" className="mainContainer">
            <CssBaseline/>
            <h1>Edit Case</h1>
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


export default EditCasePage;