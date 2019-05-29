import { AuthActionTypes, LOGIN_FB, LOGIN_GITHUB, LOGIN_SUCCEEDED } from "./types";

export function loginFb(): AuthActionTypes {
    return {
        type: LOGIN_FB
    };
}

export function loginGithub(): AuthActionTypes {
    return {
        type: LOGIN_GITHUB
    };
}

export function loginSucceeded(email: string): AuthActionTypes {
    return {
        type: LOGIN_SUCCEEDED,
        email: email
    };
}