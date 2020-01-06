import React, {useEffect, useState} from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import CaseForm from "../Ui/CaseForm/CaseForm";
import Loading from "../Status/Loading";
import {HOME} from "../../constants/routes";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

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
        <Container maxWidth="lg" className="mainContainer">
            <div>
                {caseToEdit ? (
                    <div>
                        <h1 className="title">Edit Case</h1>
                        <Link to={HOME} className="backButton">
                            <Button color="primary" variant="contained">
                                <span>BACK</span>
                            </Button>
                        </Link>
                        <CaseForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Edit Case"}/>
                    </div>
                ) : (
                    <Loading/>
                )}
            </div>
        </Container>
    );
}

export default EditCasePage;