import { AuthState, ActionTypes } from "./types";

const initialState: AuthState = ({
    isLoggedIn: false,
    loginProvider: 'none'
});

export function authReducer(
    state = initialState,
    action: ActionTypes
): AuthState {
    switch (action.type) {
        case 'FB': {
            return {
                ...state,
                isLoggedIn: true,
                loginProvider: 'fb'
            };
        }
        case 'GITHUB': {
            return {
                ...state,
                isLoggedIn: true,
                loginProvider: 'github'
            };
        }
        default:
            return state;
    }
}
