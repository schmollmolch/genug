import {
  AuthActionTypes,
  LOGIN_FB,
  LOGIN_GITHUB,
  LOGIN_SUCCEEDED,
  LOGIN_FAILED
} from "./types";

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

export function loginFailed(error: string): AuthActionTypes {
  return {
    type: LOGIN_FAILED
  };
}
