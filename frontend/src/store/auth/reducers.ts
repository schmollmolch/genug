import { AuthState, ActionTypes, SUCCEEDED, LOGIN_GITHUB, LOGIN_FB } from "./types";

const initialState: AuthState = ({
    isLoggedIn: false,
    loginProvider: 'none'
});

export function authReducer(
    state = initialState,
    action: ActionTypes
): AuthState {
    switch (action.type) {
        case LOGIN_FB: {
            return {
                ...state,
                isLoggedIn: 'inprogress',
                loginProvider: 'fb'
            };
        }
        case LOGIN_GITHUB: {
            return {
                ...state,
                isLoggedIn: 'inprogress',
                loginProvider: 'github'
            };
        }
        case SUCCEEDED: {
            return {
                ...state,
                isLoggedIn: true,
                email: action.email
            }
        }
        default:
            return state;
    }
}
