import React, {useState} from 'react';
import {useAuthorizationRedirect} from "../../../../hooks/useAuthorizationRedirect";
import SimpleSnackbarContainer from "../../../Ui/Snackbar/SimpleSnackbarContainer";
import MasterDataForm from "../../../Ui/MasterDataForm/MasterDataForm";

function AddMasterData(props) {
    useAuthorizationRedirect(props.auth);

    const INITIAL_STATE = {
        customer: '',
        projectId: '',
        product: ''
    };

    const [state, setState] = useState(INITIAL_STATE);

    const onSubmit = event => {
        event.preventDefault();
        props.createMasterData(state);
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
            <MasterDataForm onSubmit={onSubmit} onChange={onChange} state={state} title={"Add Masterdata"}/>
            <SimpleSnackbarContainer/>
        </div>

    );
}


export default AddMasterData;