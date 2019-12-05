export const CREATE_MASTERDATA_SUCCESS = 'CREATE_MASTERDATA_SUCCESS';
export const CREATE_MASTERDATA_ERROR = 'CREATE_MASTERDATA_ERROR';
export const CLEAN_MASTERDATA_SUCCESS = 'CLEAN_MASTERDATA_SUCCESS';
export const CLEAN_MASTERDATA_ERROR = 'CLEAN_MASTERDATA_ERROR';
export const UPDATE_MASTERDATA_SUCCESS = 'UPDATE_MASTERDATA_SUCCESS';
export const UPDATE_MASTERDATA_ERROR = 'UPDATE_MASTERDATA_ERROR';

//thunk actions
export const createMasterData = newMasterData => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('masterdata').add({
            ...newMasterData,
            date: new Date(newMasterData.date),
        }).then(() => {
            dispatch(getCreateMasterDataSuccessAction(newMasterData));
        }).catch(error => {
            dispatch(getCreateMasterDataErrorAction(error));
        })
    }
};

export const updateMasterData = updateMasterData => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('masterdata').doc(updateMasterData.id).update({
            customer: updateMasterData.customer,
            projectId: Number(updateMasterData.projectId),
            product: updateMasterData.product,
        }).then(() => {
            dispatch(getUpdateMasterDataSuccessAction(updateMasterData));
        }).catch((error) => {
            dispatch(getUpdateMasterDataErrorAction(error));
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

const getUpdateMasterDataSuccessAction = updateMasterData => ({
    type: UPDATE_MASTERDATA_SUCCESS,
    payload: {updateMasterData}
});

const getUpdateMasterDataErrorAction = error => ({
    type: UPDATE_MASTERDATA_ERROR,
    payload: {error}
});




