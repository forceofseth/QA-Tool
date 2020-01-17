import authReducer from "./authReducer";
import {
    CLEAN_AUTH_ERROR, CLEAN_AUTH_SUCCESS,
    CREATE_USER_ERROR,
    CREATE_USER_SUCCESS, DELETE_USER_ERROR, DELETE_USER_SUCCESS,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    PASSWORD_UPDATE_ERROR,
    PASSWORD_UPDATE_SUCCESS, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS
} from "../actions/authActions";

describe('authReducer Test Suite', () => {
    it('error null, successMessage null on login success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newState = authReducer(initialState, {type: LOGIN_SUCCESS});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('error not null, successMessage null on login error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = authReducer(initialState, {type: LOGIN_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage null on logout success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newState = authReducer(initialState, {type: LOGOUT_SUCCESS});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('error null, successMessage not null on password update success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newState = authReducer(initialState, {type: PASSWORD_UPDATE_SUCCESS});
        expect(newState).toEqual({successMessage: "Successfully updated your password!", error: null});
    });

    it('error not null, successMessage null on password update error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = authReducer(initialState, {type: PASSWORD_UPDATE_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage not null on reset password success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newState = authReducer(initialState, {type: RESET_PASSWORD_SUCCESS});
        expect(newState).toEqual({successMessage: "Successfully sent an email with a reset link to your address!", error: null});
    });

    it('error not null, successMessage null on reset password  error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = authReducer(initialState, {type: RESET_PASSWORD_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage not null on create user success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newUser = {firstName: "Hans"};
        const newState = authReducer(initialState, {type: CREATE_USER_SUCCESS, payload: {newUser}});
        expect(newState).toEqual({successMessage: "Successfully created a new User: "+ newUser.firstName + "!", error: null});
    });

    it('error not null, successMessage null on create user error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = authReducer(initialState, {type: CREATE_USER_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });
    it('error null, successMessage not null on update user success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const updatedUser = {firstName: "Hans", lastName: "Peter"};
        const newState = authReducer(initialState, {type: UPDATE_USER_SUCCESS, payload: {updatedUser}});
        expect(newState).toEqual({successMessage: "Successfully updated user: "+ updatedUser.firstName + " " + updatedUser.lastName + "!", error: null});
    });

    it('error not null, successMessage null on update user error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = authReducer(initialState, {type: UPDATE_USER_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage not null on delete user success', () => {
        const initialState = {
            successMessage: null,
            error: "test error message"
        };
        const newState = authReducer(initialState, {type: DELETE_USER_SUCCESS});
        expect(newState).toEqual({successMessage: "Successfully deleted user!", error: null});
    });

    it('error not null, successMessage null on delete user error', () => {
        const initialState = {
            successMessage: null,
            error: null
        };
        const error = {message: "this is an error"};
        const newState = authReducer(initialState, {type: DELETE_USER_ERROR, payload: {error}});
        expect(newState).toEqual({successMessage: null, error: error});
    });

    it('error null, successMessage null on clean auth error', () => {
        const initialState = {
            successMessage: null,
            error: "this is an error"
        };
        const newState = authReducer(initialState, {type: CLEAN_AUTH_ERROR});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('error null, successMessage null on clean auth success', () => {
        const initialState = {
            successMessage: "this is a success message",
            error: null
        };
        const newState = authReducer(initialState, {type: CLEAN_AUTH_SUCCESS});
        expect(newState).toEqual({successMessage: null, error: null});
    });

    it('should return the same state when no action is matching', () => {
        const initialState = {
            successMessage: "this is a success message",
            error: "this is an error"
        };
        const newState = authReducer(initialState, {type: "NOT_MATCHING"});
        expect(newState).toEqual(initialState);
    });
});