export const CREATE_MASTERDATA_SUCCESS = 'CREATE_MASTERDATA_SUCCESS';
export const CREATE_MASTERDATA_ERROR = 'CREATE_MASTERDATA_ERROR';
export const CLEAN_MASTERDATA_SUCCESS = 'CLEAN_MASTERDATA_SUCCESS';
export const CLEAN_MASTERDATA_ERROR = 'CLEAN_MASTERDATA_ERROR';
export const UPDATE_MASTERDATA_SUCCESS = 'UPDATE_MASTERDATA_SUCCESS';
export const UPDATE_MASTERDATA_ERROR = 'UPDATE_MASTERDATA_ERROR';
export const DELETE_MASTERDATA_SUCCESS = 'DELETE_MASTERDATA_SUCCESS';
export const DELETE_MASTERDATA_ERROR = 'DELETE_MASTERDATA_ERROR';

//thunk actions
export const createMasterData = newMasterData => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('masterdata').add({
            ...newMasterData,
        }).then(() => {
            dispatch(getCreateMasterDataSuccessAction(newMasterData));
        }).catch(error => {
            dispatch(getCreateMasterDataErrorAction(error));
        })
    }
};

export const updateMasterData = updatedMasterData => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('masterdata').doc(updatedMasterData.id).update({
            customer: updatedMasterData.customer,
            projectId: Number(updatedMasterData.projectId),
            product: updatedMasterData.product,
        }).then(() => {
            dispatch(getUpdateMasterDataSuccessAction(updatedMasterData));
        }).catch((error) => {
            dispatch(getUpdateMasterDataErrorAction(error));
        })
    }
};

export const deleteMasterData = masterDataId => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('masterdata').doc(masterDataId).delete().then(() => {
            console.log("successfully deleted masterdata with the id: " + masterDataId);
            dispatch(getDeleteMasterDataSuccessAction(masterDataId));
        }).catch((error) => {
            console.log(error);
            dispatch(getDeleteMasterDataSuccessError(error));
        })
    }
};

//action creators
const getCreateMasterDataSuccessAction = newMasterData => ({
    type: CREATE_MASTERDATA_SUCCESS,
    payload: {newMasterData}
});
const getCreateMasterDataErrorAction = error => ({
    type: CREATE_MASTERDATA_ERROR,
    payload: {error}
});

const getUpdateMasterDataSuccessAction = updatedMasterData => ({
    type: UPDATE_MASTERDATA_SUCCESS,
    payload: {updatedMasterData}
});

const getUpdateMasterDataErrorAction = error => ({
    type: UPDATE_MASTERDATA_ERROR,
    payload: {error}
});

const getDeleteMasterDataSuccessAction = masterDataId => ({
    type: DELETE_MASTERDATA_SUCCESS,
    payload: {masterDataId}
});

const getDeleteMasterDataSuccessError = error => ({
    type: DELETE_MASTERDATA_ERROR,
    payload: {error}
});

export const cleanMasterDataErrorAction = () => ({
    type: CLEAN_MASTERDATA_ERROR
});

export const cleanMasterDataSuccessAction = () => ({
    type: CLEAN_MASTERDATA_SUCCESS
});




