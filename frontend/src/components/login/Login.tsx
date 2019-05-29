import React from 'react';
import {
    IonButton, IonCard, IonCardTitle, IonCardContent, IonCardHeader
} from '@ionic/react';
import { Trans } from '@lingui/macro';
import { connect } from "react-redux";

import Log from '../../common/Log';
import { loginFb, loginGithub } from '../../store/auth/actions';
import { AppState } from '../../store';

interface LoginProps {
    loginInProgress: boolean,
    loginFb: typeof loginFb,
    loginGithub: typeof loginGithub
}

const Login = (props: LoginProps) => {
    const pause = (e: MouseEvent) => {
        Log.trace('login with FB', 'Login')
        // setState({ state: 'paused' });
        props.loginFb();
    }

    return <IonCard>
        <IonCardHeader><IonCardTitle><Trans>Hello Stranger</Trans></IonCardTitle></IonCardHeader>
        <IonCardContent>
            <IonButton disabled={props.loginInProgress} onClick={e => pause(e)}><Trans>Login</Trans>...</IonButton>
        </IonCardContent>
    </IonCard>
}

const mapStateToProps = (state: AppState) => ({
    loginInProgress: state.auth.isLoggedIn === 'inprogress'
});

export default connect(
    mapStateToProps,
    { loginFb, loginGithub }
)(Login);
