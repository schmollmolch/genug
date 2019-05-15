import React from 'react';
import moment from 'moment';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';
import { Timer } from '../../../../types'
import { CountdownRunningState } from './CountdownRunningState';
import { I18n } from '@lingui/react';

interface Props {
    timer: Timer
    pauseTimer: () => void
    continueTimer: () => void;
}

export const Countdown = (props: Props) => {
    moment.locale('de')
    return <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>{props.timer.name}</IonCardSubtitle>
            <IonCardTitle>
                <I18n>
                    {({ i18n }) => moment.duration(props.timer.remainingSecondsSinceLastStart, 'seconds').locale(i18n.language).humanize()}
                </I18n>
            </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <CountdownRunningState state={props.timer.status} pause={props.pauseTimer} continue={props.continueTimer}></CountdownRunningState>
        </IonCardContent>
    </IonCard>;
} 