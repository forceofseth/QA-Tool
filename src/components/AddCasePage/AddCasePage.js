import React, {useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CaseForm from "../Ui/CaseForm/CaseForm";
import {HOME} from "../../constants/routes";

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
            <CaseForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Add Case"}/>
        </div>

    );
}


export default AddCasePage;