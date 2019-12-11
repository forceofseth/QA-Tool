import React, {useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CaseForm from "../Ui/CaseForm/CaseForm";
import {HOME} from "../../constants/routes";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import '../global.css';

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
            product: value && value.product,
            customer: value && value.customer,
            projectId: value && value.projectId
        });
    };


    return (
        <div>

            <Container maxWidth="lg" className="mainContainer">
                <CssBaseline/>
                <h1 className="title">Add Case</h1>
                <Link to={HOME} className="backButton">
                    <Button color="primary" variant="contained">
                        <span>BACK</span>
                    </Button>
                </Link>
                <Autocomplete
                    options={props.masterData}
                    getOptionLabel={option => option.customer}
                    style={{width: 300}}
                    onChange={onAutocompleteChange}
                    renderInput={params => (
                        <TextField {...params} label="Choose Customer from Database" variant="outlined" fullWidth/>
                    )}
                />
                <CaseForm onSubmit={onSubmit} onChange={onChange} state={state}  title={"Add Case"}/>
            </Container>




        </div>

    );
}


export default AddCasePage;