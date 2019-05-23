import { Observable } from 'rxjs';
import { ActionTypes } from "./types";
import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { loginSucceeded } from "./actions";

export const loginFbEffect = (action$: Observable<ActionTypes>) => action$.pipe(
    ofType('FB'),
    delay(3000),
    map(a => loginSucceeded('some@mail.com'))
);