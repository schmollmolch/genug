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
import { Timer } from '../../../types'
import { CountdownRunningState } from './CountdownRunningState';

interface Props {
    timer: Timer
}

export const Countdown = (props: Props) => {
    const [state, setState] = React.useState(props.timer)

    return <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>{state.name}</IonCardSubtitle>
            <IonCardTitle>{state.remainingSecondsSinceLastStart}s</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <CountdownRunningState state={state.status}></CountdownRunningState>
        </IonCardContent>
    </IonCard>;
} 