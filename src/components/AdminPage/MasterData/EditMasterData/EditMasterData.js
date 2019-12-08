import React, {useEffect, useState} from 'react';
import {useAuthorizationRedirect} from "../../../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../../../Ui/Snackbar/SimpleSnackbarContainer";
import MasterDataForm from "../../../Ui/MasterDataForm/MasterDataForm";
import Loading from "../../../Status/Loading";
import {ADMIN} from "../../../../constants/routes";

function EditMasterData(props) {
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
        <div>
            {masterDataToEdit ? (
                <div>
                    <MasterDataForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Edit Masterdata"}/>
                    <SimpleSnackbarContainer/>
                </div>
            ) : (
                <Loading/>
            )}
        </div>
    );
}


export default EditMasterData;