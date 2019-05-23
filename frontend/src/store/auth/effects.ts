import { Observable } from 'rxjs';
import { AuthActionTypes, LOGIN_FB } from "./types";
import { ofType, combineEpics } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { loginSucceeded } from "./actions";

const loginFbEffect = (action$: Observable<AuthActionTypes>) => action$.pipe(
    ofType(LOGIN_FB),
    delay(3000),
    map(a => loginSucceeded('some@mail.com'))
);

export const authEffects = combineEpics(loginFbEffect);