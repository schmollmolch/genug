export interface AuthState {
  isLoggedIn: boolean | "inprogress" | "failed";
  loginProvider: "fb" | "github" | "none";
  email?: string;
}

export const LOGIN_FB = "LOGIN_FB";
export const LOGIN_GITHUB = "LOGIN_GITHUB";
export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";

// interface LoginAction {
//     type: typeof LOGIN_FB | typeof LOGIN_GITHUB | typeof LOGIN_SUCCEEDED;
//     email?: string
// }

// export type AuthActionTypes = LoginAction;

interface LoginAction {
  type:
    | typeof LOGIN_FB
    | typeof LOGIN_GITHUB
    | typeof LOGIN_SUCCEEDED
    | typeof LOGIN_FAILED;
  email?: string;
}

export type AuthActionTypes = LoginAction;
