import { Observable, from } from 'rxjs';
import { delay, map, flatMap, filter } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { Timer } from "../../../../types";
import { TimerActionTypes, PAUSE_TIMER } from "./types";
import { continueTimer, addTimer } from './actions';
import { AuthActionTypes, LOGIN_SUCCEEDED } from '../auth/types';

const getTimer = (account: string): Observable<Timer> => {
    return from(fetch(`/api/timer/${encodeURI(account)}`, {
        headers:
            { accept: 'application/json' },
    })
        .then(checkStatus)
        .then(res => res.json() as Promise<Timer>));
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

const pauseEffect = (action$: Observable<TimerActionTypes>) => action$.pipe(
    ofType(PAUSE_TIMER),
    delay(30000),
    map(a => continueTimer(a.timer))
);

const loadAfterLogin = (action$: Observable<AuthActionTypes>) => action$.pipe(
    ofType(LOGIN_SUCCEEDED),
    map(a => a.email || ''),
    flatMap(getTimer),
    map(addTimer)
);

export const timerEffects = combineEpics(pauseEffect, loadAfterLogin);