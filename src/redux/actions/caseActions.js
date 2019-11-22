
export const CREATE_CASE = 'CREATE_CASE';
export const CREATE_CASE_ERROR = 'CREATE_CASE_ERROR';
export const CLEAN_CASE_SUCCESS = 'CLEAN_CASE_SUCCESS';
export const CLEAN_CASE_ERROR = 'CLEAN_CASE_ERROR';
//thunk actions
export const createCase = newCase => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('cases').add({
            ...newCase,
            date: new Date(newCase.date)
        }).then(() => {
            dispatch(getCreateCaseAction(newCase))
        }).catch((error) => {
            dispatch(getCreateCaseErrorAction(error))
        })
    }
};

//action creators
const getCreateCaseAction = newCase => ({
    type: CREATE_CASE,
    payload: {newCase}
});
const getCreateCaseErrorAction = (error) => ({
    type: CREATE_CASE_ERROR,
    payload: error
});

export const cleanCaseSuccessAction = () => ({
    type: CLEAN_CASE_SUCCESS
});

export const cleanCaseErrorAction = () => ({
    type: CLEAN_CASE_ERROR
});


