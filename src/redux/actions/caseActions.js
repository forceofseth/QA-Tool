export const CREATE_CASE_SUCCESS = 'CREATE_CASE_SUCCESS';
export const CREATE_CASE_ERROR = 'CREATE_CASE_ERROR';
export const CLEAN_CASE_SUCCESS = 'CLEAN_CASE_SUCCESS';
export const CLEAN_CASE_ERROR = 'CLEAN_CASE_ERROR';
export const UPDATE_CASE_SUCCESS = 'UPDATE_CASE_SUCCESS';
export const UPDATE_CASE_ERROR = 'UPDATE_CASE_ERROR';
export const UPDATE_CASE_CHECKLIST_SUCCESS = 'UPDATE_CASE_CHECKLIST_SUCCESS';
export const UPDATE_CASE_CHECKLIST_ERROR = 'UPDATE_CASE_CHECKLIST_ERROR';

//thunk actions
export const createCase = newCase => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('cases').add({
            ...newCase,
            approved: newCase.approved === 'true',
            date: new Date(newCase.date),
            projectId: Number(newCase.projectId),
            leadChecks: {
                //TODO milos add more checkboxes
                testLinks: Boolean(false),
                testLinks2: Boolean(false)
            },
            webChecks: {
                //TODO milos add more checkboxes
                checkProperties: Boolean(false),
                checkProperties2: Boolean(false)

            }
        }).then(() => {
            dispatch(getCreateCaseSuccessAction(newCase));
        }).catch(error => {
            dispatch(getCreateCaseErrorAction(error));
        })
    }
};

export const updateCase = updatedCase => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('cases').doc(updatedCase.id).update({
            approved: updatedCase.approved === 'true',
            customer: updatedCase.customer,
            date: new Date(updatedCase.date),
            projectId: Number(updatedCase.projectId),
            lead: updatedCase.lead,
            product: updatedCase.product,
            web: updatedCase.web
        }).then(() => {
            dispatch(getUpdateCaseSuccessAction(updatedCase));
        }).catch((error) => {
            dispatch(getUpdateCaseErrorAction(error));
        })

    }
};

export const updateCaseChecklist = (updatedCheckList, caseId, checkType) =>{
  return(dispatch, getState,{getFirestore})=>{
      const firestore = getFirestore();
      if(updatedCheckList && Object.keys(updatedCheckList).length !== 0){
          let caseObjectToUpdate ={};
          caseObjectToUpdate[checkType]=updatedCheckList;
      firestore.collection('cases').doc(caseId).update(caseObjectToUpdate).then(()=> {
          dispatch(getUpdateCaseCheckListSuccessAction(updatedCheckList));
      }).catch((error =>{
          dispatch(getUpdateCaseCheckListErrorAction(error));
      }))
  }}
};

//action creators
const getCreateCaseSuccessAction = newCase => ({
    type: CREATE_CASE_SUCCESS,
    payload: {newCase}
});
const getCreateCaseErrorAction = error => ({
    type: CREATE_CASE_ERROR,
    payload: {error}
});

const getUpdateCaseSuccessAction = updatedCase => ({
    type: UPDATE_CASE_SUCCESS,
    payload: {updatedCase}
});

const getUpdateCaseErrorAction = error => ({
    type: UPDATE_CASE_ERROR,
    payload: {error}
});

export const getUpdateCaseCheckListSuccessAction = (updatedCheckList) => ({
   type:  UPDATE_CASE_CHECKLIST_SUCCESS,
    payload: {updatedCheckList}
});

export const getUpdateCaseCheckListErrorAction = (error) =>({
   type: UPDATE_CASE_CHECKLIST_ERROR,
   payload:{error}
});

export const cleanCaseSuccessAction = () => ({
    type: CLEAN_CASE_SUCCESS
});

export const cleanCaseErrorAction = () => ({
    type: CLEAN_CASE_ERROR
});



