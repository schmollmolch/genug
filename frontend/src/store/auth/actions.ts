import { ActionTypes, LOGIN_FB, LOGIN_GITHUB } from "./types";

export function loginFb(): ActionTypes {
    return {
        type: LOGIN_FB,
        email: 'some@mail.com'
    };
}

export function loginGithub(): ActionTypes {
    return {
        type: LOGIN_GITHUB,
        email: 'some@mail.com'
    };
}

