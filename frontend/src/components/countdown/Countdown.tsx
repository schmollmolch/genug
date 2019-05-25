import React from 'react';
import moment, { Duration } from 'moment';
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';
import { Timer } from '../../../../types'
import { CountdownRunningState } from './CountdownRunningState';
// import { I18n } from '@lingui/react';

interface Props {
    timer: Timer
    pauseTimer: () => void
    continueTimer: () => void;
}

const format = (duration: Duration): string => {
    const dur = duration.asMilliseconds();
    const s = Math.floor((dur / 1000) % 60);
    const m = Math.floor((dur / 1000 / 60) % 60);
    const h = Math.floor((dur / (1000 * 60 * 60)));

    return h + ':' + (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
}

const getCurrentSecondsLeft = (props: Props): number => {
    return props.timer.status === 'running' ?
        moment(props.timer.started).add(props.timer.remainingSecondsSinceLastStart, 'seconds').diff(moment().local(), 'seconds') :
        props.timer.remainingSecondsSinceLastStart;
}

export const Countdown = (props: Props) => {
    const [state, setState] = React.useState({
        current_seconds_left: getCurrentSecondsLeft(props)
    });

    if (props.timer.status === 'running')
        setTimeout(() => setState({
            current_seconds_left: getCurrentSecondsLeft(props)
        }), 1000);

    return <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>{props.timer.name}</IonCardSubtitle>
            <IonCardTitle>
                {/* <I18n>
                    {({ i18n }) => moment.duration(state.current_seconds_left, 'seconds').locale(i18n.language).humanize(true)}
                </I18n> */}
                {format(moment.duration(state.current_seconds_left, 'seconds'))}
            </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <CountdownRunningState state={props.timer.status} pause={props.pauseTimer} continue={props.continueTimer}></CountdownRunningState>
        </IonCardContent>
    </IonCard>;
}


