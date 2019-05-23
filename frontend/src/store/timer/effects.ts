import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { User } from "../../../../types";
import { ActionTypes } from "./types";
import { continueTimer } from './actions';

export const getParent = (account: string): Observable<User> => {
    return Observable.create(fetch(`/api/timer/${account}`, {
        headers:
            { accept: 'application/json' },
    })
        .then(checkStatus)
        .then(res => res.json() as Promise<User>));
}

const checkStatus = (response: Response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    // error.status = response.statusText;
    // error.response = response;
    // console.log(error); // eslint-disable-line no-console
    throw error;
}

export const pauseEffect = (action$: Observable<ActionTypes>) => action$.pipe(
    ofType('PAUSE'),
    delay(3000),
    map(a => continueTimer(a.timer))
);