import React from 'react';
import {
    IonButton,
    IonIcon,
    IonBadge
} from '@ionic/react';

import Log from '../../common/Log';
import { Trans } from '@lingui/macro';

import { TimerStatus } from '../../../../types'
interface Props {
    state: TimerStatus,
    pause: () => void
    continue: () => void;
}

export const CountdownRunningState = (props: Props) => {

    const run = (e: MouseEvent) => {
        Log.trace('paused->running', 'CountdownRunningState')
        // setState({ state: 'running' });
        props.continue();
    }
    const pause = (e: MouseEvent) => {
        Log.trace('running->paused', 'CountdownRunningState')
        // setState({ state: 'paused' });
        props.pause();
    }

    switch (props.state) {
        case 'paused':
            return (<IonButton onClick={e => run(e)}><IonIcon slot="start" name="play"></IonIcon><Trans>Continue</Trans></IonButton>)
        case 'running':
            return (<IonButton onClick={e => pause(e)}><IonIcon slot="start" name="pause"></IonIcon><Trans>Pause</Trans></IonButton>)
        case 'expired':
            return (<IonBadge color="danger"><Trans>Timer expired!</Trans></IonBadge>)
    }
}
