import React, {useEffect, useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";
import CaseForm from "../Ui/CaseForm/CaseForm";
import Loading from "../Status/Loading";

function EditCasePage(props) {
    useAuthorizationRedirect(props.auth);
    const {caseToEdit} = props;
    const [state, setState] = useState({...caseToEdit});

    useEffect(() => {
        setState({...caseToEdit})
    }, [caseToEdit]);


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
            {caseToEdit ? (
                <div>
                    <CaseForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Edit Case"}/>
                    <SimpleSnackbarContainer/>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    );
}


export default EditCasePage;