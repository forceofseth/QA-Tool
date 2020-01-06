import React, {useEffect, useState} from 'react';
import {useAuthorizationRedirect} from "../../../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../../../Ui/Snackbar/SimpleSnackbarContainer";
import MasterDataForm from "../../../Ui/MasterDataForm/MasterDataForm";
import Loading from "../../../Status/Loading";
import {ADMIN} from "../../../../constants/routes";
import Container from "@material-ui/core/Container";

function EditMasterDataPage(props) {
    useAuthorizationRedirect(props.auth);
    const {masterDataToEdit} = props;
    const [state, setState] = useState({...masterDataToEdit});

    useEffect(() => {
        setState({...masterDataToEdit})
    }, [masterDataToEdit]);


    const onSubmit = event => {
        event.preventDefault();
        props.updateMasterData(state);
        props.history.push(ADMIN);
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };


    return (
        <Container maxWidth="lg" className="mainContainer">
            {masterDataToEdit ? (
                <div>
                    <MasterDataForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Edit Masterdata"}/>
                    <SimpleSnackbarContainer/>
                </div>
            ) : (
                <Loading/>
            )}
        </Container>
    );
}


export default EditMasterDataPage;