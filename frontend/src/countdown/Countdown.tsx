import React, { Component } from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon
} from '@ionic/react';
import { Timer, TimerStatus } from '../../../types'
import { CountdownRunningState } from './CountdownRunningState';

export class Countdown extends Component<{ timer: Timer }, Timer> {
    constructor(props: { timer: Timer }) {
        super(props);
        this.state = this.props.timer;
    }

    render() {
        return <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{this.state.name}</IonCardSubtitle>
                <IonCardTitle>{this.state.remainingSecondsSinceLastStart}s</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <CountdownRunningState state={this.state.status}></CountdownRunningState>
            </IonCardContent>
        </IonCard>;
    }
} 