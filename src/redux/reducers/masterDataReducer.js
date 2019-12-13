import {
    CREATE_MASTERDATA_SUCCESS,
    CREATE_MASTERDATA_ERROR,
    CLEAN_MASTERDATA_SUCCESS,
    CLEAN_MASTERDATA_ERROR,
    UPDATE_MASTERDATA_SUCCESS, UPDATE_MASTERDATA_ERROR
} from "../actions/masterDataActions";

const initalState = {
    successMessage: null,
    error: null
};

export default function masterDataReducer(state = initalState, action) {
    switch (action.type) {
        case CREATE_MASTERDATA_SUCCESS:
            console.log("created masterData");
            return {
                ...state,
                successMessage: "Successfully created new masterdata entry with the projectId: " + action.payload.newMasterData.projectId + ".",
                error: null
            };

        case CREATE_MASTERDATA_ERROR:
            console.log("create masterData error");
            return {
                ...state,
                successMessage: null,
                error: action.payload.error
            };

        case UPDATE_MASTERDATA_SUCCESS:
            console.log("updated masterData");
            return {
                ...state,
                successMessage: "Successfully updated masterData with the projectId: " + action.payload.updatedMasterData.projectId + ".",
                error: null
            };

        case UPDATE_MASTERDATA_ERROR:
            console.log("error updating masterData");
            return {
                ...state,
                successMessage: null,
                error: action.payload.error
            };

        case CLEAN_MASTERDATA_SUCCESS:
            return {
                ...state,
                successMessage: null
            };

        case CLEAN_MASTERDATA_ERROR:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
}