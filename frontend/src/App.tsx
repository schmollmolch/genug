import React, { Component } from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import logo from './logo.svg';

import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle
} from '@ionic/react';

class App extends Component {
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
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Timer timer</IonCardSubtitle>
              <IonCardTitle>Hello John!</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              What's next?
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;