import React, {useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";
import CaseForm from "../Ui/CaseForm/CaseForm";

function AddCasePage(props) {
    useAuthorizationRedirect(props.auth);

    const INITIAL_STATE = {
        approved: '',
        customer: '',
        date: '',
        projectId: '',
        lead: '',
        product: '',
        web: ''
    };

    const [state, setState] = useState(INITIAL_STATE);

    const onSubmit = event => {
        event.preventDefault();
        props.createCase(state);
        setState(INITIAL_STATE);
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };


    return (
        <div>
            <CaseForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Add Case"}/>
            <SimpleSnackbarContainer/>
        </div>

    );
}


export default AddCasePage;