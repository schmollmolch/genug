import {
  AuthState,
  AuthActionTypes,
  LOGIN_SUCCEEDED,
  LOGIN_GITHUB,
  LOGIN_FB,
  LOGIN_FAILED
} from "./types";

const initialState: AuthState = {
  isLoggedIn: false,
  loginProvider: "none"
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes
): AuthState {
  switch (action.type) {
    case LOGIN_FB: {
      return {
        ...state,
        isLoggedIn: "inprogress",
        loginProvider: "fb"
      };
    }
    case LOGIN_GITHUB: {
      return {
        ...state,
        isLoggedIn: "inprogress",
        loginProvider: "github"
      };
    }
    case LOGIN_SUCCEEDED: {
      return {
        ...state,
        isLoggedIn: true,
        email: action.email
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isLoggedIn: "failed",
        email: undefined,
        loginProvider: "none"
      };
    }
    default:
      return state;
  }
}
