import React, {useEffect, useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CaseForm from "../Ui/CaseForm/CaseForm";
import Loading from "../Status/Loading";
import {HOME} from "../../constants/routes";

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
        props.history.push(HOME);
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
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    );
}


export default EditCasePage;