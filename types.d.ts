export interface Parent {
    name: string
    timer: Timer[]
}

export interface Timer {
    name: string
    status: TimerStatus
    started: string // ISO timestamp
    remainingSecondsSinceLastStart: number
}

export type TimerStatus = 'paused' | 'running' | 'expired';

export type BackendStatus = 'fine' | 'trouble' | 'dead'