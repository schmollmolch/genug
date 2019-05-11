import React, { Component } from 'react';
import {
    IonButton,
    IonIcon,
    IonBadge
} from '@ionic/react';
import { TimerStatus } from '../../../types'
import { throwStatement } from '@babel/types';
import Log from '../common/Log';

export class CountdownRunningState extends Component<{ state: TimerStatus }, { state: TimerStatus }> {
    constructor(props: { state: TimerStatus }) {
        super(props);
        this.state = { ...this.props };
    }

    render() {
        switch (this.state.state) {
            case 'paused':
                return (<IonButton onClick={e => this.continue(e)}><IonIcon slot="start" name="play"></IonIcon>Continue</IonButton>)
            case 'running':
                return (<IonButton onClick={e => this.pause(e)}><IonIcon slot="start" name="pause"></IonIcon>Pause</IonButton>)
            case 'expired':
                return (<IonBadge color="danger">Timer Expired</IonBadge>)
        }
    }

    continue(e: MouseEvent) {
        Log.trace('paused->running', 'CountdownRunningState')
        this.setState({ state: 'running' });
    }
    pause(e: MouseEvent) {
        Log.trace('running->paused', 'CountdownRunningState')
        this.setState({ state: 'paused' });
    }
}
