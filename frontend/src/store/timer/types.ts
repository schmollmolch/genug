import { User, Timer } from "../../../../types";
export interface TimerState extends User {}

export const PAUSE_TIMER = "PAUSE";
export const CONTINUE_TIMER = "CONTINUE";
export const ADD_TIMER = "ADD";

interface TimerAction {
  type: typeof PAUSE_TIMER | typeof CONTINUE_TIMER | typeof ADD_TIMER;
  timer: Timer;
}

export type TimerActionTypes = TimerAction;
