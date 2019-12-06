import {
    CREATE_MASTERDATA_SUCCESS,
    CREATE_MASTERDATA_ERROR,
    CLEAN_MASTERDATA_SUCCESS,
    CLEAN_MASTERDATA_ERROR,
    UPDATE_MASTERDATA_SUCCESS, UPDATE_MASTERDATA_ERROR
} from "../actions/masterDataAction";

const initalState = {
    successMessage: null,
    error: null
};

export default function masterDataReducer(state = initalState, action) {
    switch (action.type) {
        case CREATE_MASTERDATA_SUCCESS:
            console.log("created masterdata", action.payload);
            return {
                ...state,
                successMessage: "Successfully created new masterdata entry with the ID: " + action.payload.newMasterData.projectId + ".",
                error: null
            };

        case CREATE_MASTERDATA_ERROR:
            console.log("create masterdata error", action.payload);
            return {
                ...state,
                successMessage: null,
                error: action.payload.error
            };

        case UPDATE_MASTERDATA_SUCCESS:
            console.log("updated masterdata", action.payload);
            return {
                ...state,
                successMessage: "Successfully updated masterdata with the id: " + action.payload.updatedMasterData.projectId + ".",
                error: null
            };

        case UPDATE_MASTERDATA_ERROR:
            console.log("error updating masterdata", action.payload);
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