import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { timerReducer } from "./timer/reducers";

const rootReducer = combineReducers({
    timers: timerReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {

    const store = createStore(
        rootReducer,
        composeWithDevTools()
    );

    return store;
}
