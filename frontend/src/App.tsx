import React from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import logo from './logo.svg';

import './i18n';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle,
} from '@ionic/react';
import { Countdown } from './countdown';

const App = () => (
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
      <Countdown timer={{ name: 'John plays Splatoon', remainingSecondsSinceLastStart: 13, started: new Date().toISOString(), status: 'paused' }} />
    </IonContent>
  </IonApp>
)

export default App;