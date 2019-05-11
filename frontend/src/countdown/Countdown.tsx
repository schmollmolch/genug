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

export class Countdown extends Component<{ timer: Timer }> {

    render() {
        return <IonCard>
            <IonCardHeader>
                <IonCardSubtitle>{this.props.timer.name}</IonCardSubtitle>
                <IonCardTitle>{this.props.timer.remainingSecondsSinceLastStart}s</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <CountdownRunningState state={this.props.timer.status}></CountdownRunningState>
            </IonCardContent>
        </IonCard>;
    }
} 