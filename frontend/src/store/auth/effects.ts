import { Observable, of } from 'rxjs';
import { AuthActionTypes, LOGIN_FB } from "./types";
import { ofType, combineEpics } from "redux-observable";
import { delay, map, catchError } from "rxjs/operators";
import { loginSucceeded, loginFailed } from "./actions";

const loginFbEffect = (action$: Observable<AuthActionTypes>) => action$.pipe(
    ofType(LOGIN_FB),
    delay(500),
    map(a => loginSucceeded('some@mail.com')),
    catchError(err => {
        console.error(err.message);
        return of(loginFailed(err.message));
    })
);

export const authEffects = combineEpics(loginFbEffect);