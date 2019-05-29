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
    loginFailed: boolean,
    loginFb: typeof loginFb,
    loginGithub: typeof loginGithub
}

const Login = (props: LoginProps) => {
    const login = (e: MouseEvent) => {
        Log.trace('login with FB', 'Login')
        // setState({ state: 'paused' });
        props.loginFb();
    }

    return <IonCard>
        <IonCardHeader><IonCardTitle><Trans>Hello Stranger</Trans></IonCardTitle></IonCardHeader>
        <IonCardContent>
            {(props.loginFailed) ? (<IonButton disabled={true} color={'danger'}><Trans>Login Failed</Trans>!</IonButton>) : (<IonButton disabled={props.loginInProgress} onClick={login}><Trans>Login</Trans>...</IonButton>)}
        </IonCardContent>
    </IonCard>
}

const mapStateToProps = (state: AppState) => ({
    loginInProgress: state.auth.isLoggedIn === 'inprogress',
    loginFailed: state.auth.isLoggedIn === 'failed'
});

export default connect(
    mapStateToProps,
    { loginFb, loginGithub }
)(Login);
