export interface Parent {
    name: string
    timer: Timer[]
}

export interface Timer {
    status: 'paused' | 'running' | 'expired'
    started: string, // ISO timestamp
    remainingSecondsSinceLastStart: number
}