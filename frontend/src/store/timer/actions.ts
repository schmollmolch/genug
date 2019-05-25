import { Timer } from "../../../../types";
import { PAUSE_TIMER, CONTINUE_TIMER, TimerActionTypes, ADD_TIMER } from "./types";

export function pauseTimer(timer: Timer): TimerActionTypes {
    return {
        type: PAUSE_TIMER,
        timer: timer
    };
}

export function continueTimer(timer: Timer): TimerActionTypes {
    return {
        type: CONTINUE_TIMER,
        timer: timer
    };
}

export function addTimer(timer: Timer): TimerActionTypes {
    return {
        type: ADD_TIMER,
        timer: timer
    };
}

