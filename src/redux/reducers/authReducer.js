import {LOGIN_SUCCESS, LOGOUT_SUCCESS, CREATE_FIREBASE_APP, LOGIN_ERROR} from "../actions/authActions";

const initialState = {
    firebaseApp: null,
    error: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload.error
            };

        case LOGOUT_SUCCESS:
            return state;
            
        case CREATE_FIREBASE_APP:
            return {
                ...state,
                firebaseApp: action.payload.firebaseApp
            };

        default:
            return state;
    }
}
