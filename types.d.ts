export interface User {
    name: string
    timers: Timer[]
}

export interface Timer {
    id: string
    name: string
    status: TimerStatus
    started: string // ISO timestamp
    remainingSecondsSinceLastStart: number
}

export type TimerStatus = 'paused' | 'running' | 'expired'

export type BackendStatus = 'fine' | 'trouble' | 'dead'

