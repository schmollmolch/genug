import { createStore, combineReducers, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from "redux-devtools-extension";

import { timerReducer } from "./timer/reducers";
import { authReducer } from "./auth/reducers";
import { loginFbEffect } from "./auth/effects";
import { pauseEffect } from "./timer/effects";

export const rootEpic = combineEpics(
    loginFbEffect,
    pauseEffect
);

const rootReducer = combineReducers({
    auth: authReducer,
    timers: timerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {

    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(epicMiddleware))
    );

    epicMiddleware.run(rootEpic);

    return store;
}
