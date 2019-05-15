import React from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';
import { Timer } from '../../../../types'
import { CountdownRunningState } from './CountdownRunningState';

interface Props {
    timer: Timer
    pauseTimer: () => void
    continueTimer: () => void;
}

export const Countdown = (props: Props) => {
    return <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>{props.timer.name}</IonCardSubtitle>
            <IonCardTitle>{props.timer.remainingSecondsSinceLastStart}s</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <CountdownRunningState state={props.timer.status} pause={props.pauseTimer} continue={props.continueTimer}></CountdownRunningState>
        </IonCardContent>
    </IonCard>;
} 