import { User, Timer } from "../../../../types";
export interface TimerState extends User {

}

export const PAUSE_TIMER = 'PAUSE';
export const CONTINUE_TIMER = 'CONTINUE';

interface TimerAction {
    type: typeof PAUSE_TIMER | typeof CONTINUE_TIMER;
    timer: Timer;
}

export type ActionTypes = TimerAction;
