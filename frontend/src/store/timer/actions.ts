import { Timer } from "../../../../types";
import { PAUSE_TIMER, CONTINUE_TIMER, ActionTypes } from "./types";

export function pauseTimer(timer: Timer): ActionTypes {
    return {
        type: PAUSE_TIMER,
        timer: timer
    };
}

export function continueTimer(timer: Timer): ActionTypes {
    return {
        type: CONTINUE_TIMER,
        timer: timer
    };
}

