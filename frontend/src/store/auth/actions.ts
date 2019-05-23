import { ActionTypes, LOGIN_FB, LOGIN_GITHUB, SUCCEEDED as LOGIN_SUCCEEDED } from "./types";

export function loginFb(): ActionTypes {
    return {
        type: LOGIN_FB
    };
}

export function loginGithub(): ActionTypes {
    return {
        type: LOGIN_GITHUB
    };
}

export function loginSucceeded(email: string): ActionTypes {
    return {
        type: LOGIN_SUCCEEDED,
        email: email
    };
}