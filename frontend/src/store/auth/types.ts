
export interface AuthState {
    isLoggedIn: boolean | 'inprogress',
    loginProvider: 'fb' | 'github' | 'none',
    email?: string
}

export const LOGIN_FB = 'FB';
export const LOGIN_GITHUB = 'GITHUB';
export const SUCCEEDED = 'SUCCEEDED';

interface LoginAction {
    type: typeof LOGIN_FB | typeof LOGIN_GITHUB;
}

interface LoginSuceededAction {
    type: typeof SUCCEEDED;
    email: string
}

export type ActionTypes = LoginAction | LoginSuceededAction;
