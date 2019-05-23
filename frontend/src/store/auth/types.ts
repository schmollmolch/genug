
export interface AuthState {
    isLoggedIn: boolean,
    loginProvider: 'fb' | 'github' | 'none',
    email?: string
}

export const LOGIN_FB = 'FB';
export const LOGIN_GITHUB = 'GITHUB';

interface LoginAction {
    type: typeof LOGIN_FB | typeof LOGIN_GITHUB;
    email: string;
}

export type ActionTypes = LoginAction;
