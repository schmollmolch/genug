import {
  TimerState,
  TimerActionTypes,
  ADD_TIMER,
  PAUSE_TIMER,
  CONTINUE_TIMER
} from "./types";
import moment from "moment";

const initialState: TimerState = {
  name: "Heather",
  timers: [
    // {
    //     id: '1',
    //     name: 'John playing Splatoon',
    //     remainingSecondsSinceLastStart: 3600,
    //     started: new Date().toISOString(),
    //     status: 'paused'
    // }
  ]
};

export function timerReducer(
  state = initialState,
  action: TimerActionTypes
): TimerState {
  switch (action.type) {
    case CONTINUE_TIMER: {
      return {
        ...state,
        timers: state.timers.map(t =>
          t.id === action.timer.id
            ? { ...t, status: "running", started: new Date().toISOString() }
            : t
        )
      };
    }
    case PAUSE_TIMER: {
      return {
        ...state,
        timers: state.timers.map(t =>
          t.id === action.timer.id
            ? {
                ...t,
                status: "paused",
                remainingSecondsSinceLastStart:
                  t.remainingSecondsSinceLastStart -
                  moment().diff(moment(t.started), "seconds")
              }
            : t
        )
      };
    }
    case ADD_TIMER: {
      return {
        ...state,
        timers: [action.timer, ...state.timers]
      };
    }
    default:
      return state;
  }
}
