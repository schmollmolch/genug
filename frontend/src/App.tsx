import React from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import logo from './logo.svg';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle,
} from '@ionic/react';

import { connect } from "react-redux";
import { Countdown } from './components/countdown';
import { Timer } from '../../types';
import { pauseTimer, continueTimer } from './store/timer/actions';
import { AppState } from './store';

interface AppProps {
  timers: Timer[],
  userName: string,
  pauseTimer: typeof pauseTimer,
  continueTimer: typeof continueTimer
}

class App extends React.Component<AppProps> {

  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton goBack={() => { }} />
            </IonButtons>
            <IonTitle><img src={logo} className="genug-logo" alt="logo" />genug!</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          {this.props.timers.map(timer => (
            <Countdown key={timer.id} timer={timer} pauseTimer={() => this.props.pauseTimer(timer)} continueTimer={() => this.props.continueTimer(timer)} />
          ))}
        </IonContent>
      </IonApp>
    )
  };
}

const mapStateToProps = (state: AppState) => ({
  timers: state.timers.timers,
  userName: state.timers.name
});

export default connect(
  mapStateToProps,
  { pauseTimer, continueTimer }
)(App);
