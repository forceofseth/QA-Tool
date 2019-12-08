import React, {useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CaseForm from "../Ui/CaseForm/CaseForm";
import {HOME} from "../../constants/routes";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

    const onAutocompleteChange = (event, value) => {
        const customerHtml = document.querySelector(".customer-js");
        customerHtml.value = value && value.customer ? value.customer : "";
        const projectIdHtml = document.querySelector(".projectId-js");
        projectIdHtml.value = value && value.projectId ? value.projectId : "";
        const productHtml = document.querySelector(".product-js");
        productHtml.value = value && value.product ? value.product : "";

        setState({...state,
            product: value.product,
            customer: value.customer,
            projectId: value.projectId
        });
    };


    return (
        <div>
            <Autocomplete
                options={props.masterData}
                getOptionLabel={option => option.customer}
                style={{width: 300}}
                onChange={onAutocompleteChange}
                renderInput={params => (
                    <TextField {...params} label="Choose Customer" variant="outlined" fullWidth/>
                )}
            />
            <CaseForm onSubmit={onSubmit} onChange={onChange} state={state}  title={"Add Case"}/>
        </div>

    );
}


export default AddCasePage;