
export interface AuthState {
    isLoggedIn: boolean | 'inprogress',
    loginProvider: 'fb' | 'github' | 'none',
    email?: string
}

export const LOGIN_FB = 'LOGIN_FB';
export const LOGIN_GITHUB = 'LOGIN_GITHUB';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';

// interface LoginAction {
//     type: typeof LOGIN_FB | typeof LOGIN_GITHUB | typeof LOGIN_SUCCEEDED;
//     email?: string
// }

// export type AuthActionTypes = LoginAction;

interface LoginAction {
    type: typeof LOGIN_FB | typeof LOGIN_GITHUB | typeof LOGIN_SUCCEEDED;
    email?: string
}

export type AuthActionTypes = LoginAction;
