import {
    CLEAN_MASTERDATA_ERROR,
    CLEAN_MASTERDATA_SUCCESS,
    CREATE_MASTERDATA_ERROR,
    CREATE_MASTERDATA_SUCCESS,
    UPDATE_MASTERDATA_ERROR, UPDATE_MASTERDATA_SUCCESS
} from "../actions/masterDataActions";
import masterDataReducer from "./masterDataReducer";

describe('masterDataReducer Test Suite', () =>{
    it('error null, successMessage not null on create masterData success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newMasterData= {projectId: 1234};
        const newState = masterDataReducer(initialState, {type: CREATE_MASTERDATA_SUCCESS, payload: {newMasterData}});
        expect(newState).toEqual({successMessage: "Successfully created new masterdata entry with the projectId: " + newMasterData.projectId + ".", error: null});
    });

    it('error not null, successMessage  null on create masterData error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = masterDataReducer(initialState, {type: CREATE_MASTERDATA_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage not null on update masterData success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const updatedMasterData= {projectId: 1234};
        const newState = masterDataReducer(initialState, {type: UPDATE_MASTERDATA_SUCCESS, payload: {updatedMasterData}});
        expect(newState).toEqual({successMessage: "Successfully updated masterData with the projectId: " + updatedMasterData.projectId + ".", error: null});
    });

    it('error not null, successMessage  null on update masterData error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = masterDataReducer(initialState, {type: UPDATE_MASTERDATA_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage null on clean masterData success', () => {
        const initialState = {
            successMessage: "this is a success message",
            error: null
        };
        const newState = masterDataReducer(initialState, {type: CLEAN_MASTERDATA_SUCCESS});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('error null, successMessage null on clean masterData error', () => {
        const initialState = {
            successMessage: null,
            error: "this is an error"
        };
        const newState = masterDataReducer(initialState, {type: CLEAN_MASTERDATA_ERROR});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('should return the same state when no action is matching', () => {
        const initialState = {
            successMessage: "this is a success message",
            error: "this is an error"
        };
        const newState = masterDataReducer(initialState, {type: "NOT_MATCHING"});
        expect(newState).toEqual(initialState);
    });


});
