import React, { Component } from 'react';
import {
    IonButton,
    IonIcon
} from '@ionic/react';
import { TimerStatus } from '../../../types'

export class CountdownRunningState extends Component<{ state: TimerStatus }> {

    render() {
        switch (this.props.state) {
            case 'paused':
                return (<IonButton><IonIcon slot="start" name="play"></IonIcon>Continue</IonButton>)
            case 'running':
                return (<IonButton><IonIcon slot="start" name="pause"></IonIcon>Pause</IonButton>)
        }
    }
}
