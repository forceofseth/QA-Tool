import {
    CREATE_CASE_SUCCESS,
    CREATE_CASE_ERROR,
    CLEAN_CASE_SUCCESS,
    CLEAN_CASE_ERROR,
    UPDATE_CASE_SUCCESS, UPDATE_CASE_ERROR, UPDATE_CASE_CHECKLIST_ERROR
} from "../actions/caseActions";

const initalState = {
    successMessage: null,
    error: null
};

export default function caseReducer(state = initalState, action) {
    switch (action.type) {
        case CREATE_CASE_SUCCESS:
            console.log("created case", action.payload);
            return {
                ...state,
                successMessage: "Successfully created new case with the ProjectId: " + action.payload.newCase.projectId + ".",
                error: null
            };

        case CREATE_CASE_ERROR:
            console.log("create case error", action.payload);
            return {
                ...state,
                successMessage: null,
                error: action.payload.error
            };

        case UPDATE_CASE_SUCCESS:
            console.log("updated case", action.payload);
            return {
                ...state,
                successMessage: "Successfully updated case with the ProjectId: " + action.payload.updatedCase.projectId + ".",
                error: null
            };

        case UPDATE_CASE_ERROR:
            console.log("error updating case", action.payload);
            return {
                ...state,
                successMessage: null,
                error: action.payload.error
            };

        case UPDATE_CASE_CHECKLIST_ERROR:
            console.log("error updating case checkList", action.payload);
            return {
                ...state,
                successMessage: null,
                error: action.payload.error
            };



        case CLEAN_CASE_SUCCESS:
            return {
                ...state,
                successMessage: null
            };

        case CLEAN_CASE_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}