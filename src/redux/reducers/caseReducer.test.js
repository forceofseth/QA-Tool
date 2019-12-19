import {
    ADD_CHECKLIST_ELEMENT_ERROR,
    ADD_CHECKLIST_ELEMENT_SUCCESS, ADD_COMMENT_ERROR, ADD_COMMENT_SUCCESS,
    CLEAN_CASE_ERROR,
    CLEAN_CASE_SUCCESS,
    CREATE_CASE_ERROR,
    CREATE_CASE_SUCCESS, UPDATE_CASE_CHECKLIST_ERROR,
    UPDATE_CASE_ERROR,
    UPDATE_CASE_SUCCESS
} from "../actions/caseActions";
import caseReducer from "./caseReducer";

describe('caseReducer Test Suite', () =>{
    it('error null, successMessage not null on create case success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newCase= {projectId: 1234};
        const newState = caseReducer(initialState, {type: CREATE_CASE_SUCCESS, payload: {newCase}});
        expect(newState).toEqual({successMessage: "Successfully created new case with the ProjectId: " + newCase.projectId + ".", error: null});
    });

    it('error not null, successMessage  null on create case error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error= {message: "this is an error"};
        const newState = caseReducer(initialState, {type: CREATE_CASE_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage not null on update case success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const updatedCase= {projectId: 1234};
        const newState = caseReducer(initialState, {type: UPDATE_CASE_SUCCESS, payload: {updatedCase}});
        expect(newState).toEqual({successMessage: "Successfully updated case with the ProjectId: " + updatedCase.projectId + ".", error: null});
    });

    it('error not null, successMessage  null on update case error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error= {message: "this is an error"};
        const newState = caseReducer(initialState, {type: UPDATE_CASE_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage not null on add checklist element success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const addedElement= "addedElement";
        const newState = caseReducer(initialState, {type: ADD_CHECKLIST_ELEMENT_SUCCESS, payload: {addedElement}});
        expect(newState).toEqual({successMessage: "Successfully added "+ addedElement + " to the Check-List", error: null});
    });

    it('error not null, successMessage null add checklist element error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error= {message: "this is an error"};
        const newState = caseReducer(initialState, {type: ADD_CHECKLIST_ELEMENT_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });
    /////////////////////////////////////////////
    it('error null, successMessage not null on add comment success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newState = caseReducer(initialState, {type: ADD_COMMENT_SUCCESS});
        expect(newState).toEqual({successMessage: "Successfully added new comment.", error: null});
    });

    it('error not null, successMessage null add comment error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error= {message: "this is an error"};
        const newState = caseReducer(initialState, {type: ADD_COMMENT_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    ///////////////////////////////////////////

    it('error not null, successMessage  null on update checklist error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error= {message: "this is an error"};
        const newState = caseReducer(initialState, {type: UPDATE_CASE_CHECKLIST_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage null on clean case success', () => {
        const initialState = {
            successMessage: "this is a success message",
            error: null
        };
        const newState = caseReducer(initialState, {type: CLEAN_CASE_SUCCESS});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('error null, successMessage null on clean case error', () => {
        const initialState = {
            successMessage: null,
            error: "this is an error"
        };
        const newState = caseReducer(initialState, {type: CLEAN_CASE_ERROR});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('should return the same state when no action is matching', () => {
        const initialState = {
            successMessage: "this is a success message",
            error: "this is an error"
        };
        const newState = caseReducer(initialState, {type: "NOT_MATCHING"});
        expect(newState).toEqual(initialState);
    });

});