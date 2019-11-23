import React, {useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";
import moment from "moment";
import CaseForm from "../Ui/CaseForm/CaseForm";

function EditCasePage(props) {
    useAuthorizationRedirect(props.auth);

    const {caseToEdit} = props;

    const [state, setState] = useState({...caseToEdit, date: moment(caseToEdit.date.toDate()).format('YYYY-MM-DD') });

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
            <div>
                <CaseForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Edit Case"}/>
                <SimpleSnackbarContainer/>
            </div>
    );
}


export default EditCasePage;