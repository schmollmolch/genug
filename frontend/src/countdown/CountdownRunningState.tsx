import React, { Component } from 'react';
import {
    IonButton,
    IonIcon,
    IonBadge
} from '@ionic/react';
import { TimerStatus } from '../../../types'
import { throwStatement } from '@babel/types';
import Log from '../common/Log';

import { useTranslation } from "react-i18next";

interface Props { state: TimerStatus }

export const CountdownRunningState = (props: Props) => {
    const [state, setState] = React.useState(props);
    const run = (e: MouseEvent) => {
        Log.trace('paused->running', 'CountdownRunningState')
        setState({ state: 'running' });
    }
    const pause = (e: MouseEvent) => {
        Log.trace('running->paused', 'CountdownRunningState')
        setState({ state: 'paused' });
    }

    switch (state.state) {
        case 'paused':
            return (<IonButton onClick={e => run(e)}><IonIcon slot="start" name="play"></IonIcon>Continue</IonButton>)
        case 'running':
            return (<IonButton onClick={e => pause(e)}><IonIcon slot="start" name="pause"></IonIcon>Pause</IonButton>)
        case 'expired':
            // return (<IonBadge color="danger">{t('TIMER_EXPIRED')}</IonBadge>)
            return (<IonBadge color="danger">Timer Expired</IonBadge>)
    }
}
