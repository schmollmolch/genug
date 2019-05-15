import { TimerState, ActionTypes } from "./types";

const initialState: TimerState = ({
    name: 'Heather',
    timers: [
        {
            id: '1',
            name: 'John playing Splatoon',
            remainingSecondsSinceLastStart: 3600,
            started: new Date().toISOString(),
            status: 'paused'
        }
    ]
});

export function timerReducer(
    state = initialState,
    action: ActionTypes
): TimerState {
    switch (action.type) {
        case 'CONTINUE': {
            return {
                ...state,
                timers: state.timers.map(t => t.id == action.timer.id ? { ...t, status: 'running' } : t)
            };
        }
        case 'PAUSE': {
            return {
                ...state,
                timers: state.timers.map(t => t.id == action.timer.id ? { ...t, status: 'paused' } : t)
            };
        }
        default:
            return state;
    }
}
