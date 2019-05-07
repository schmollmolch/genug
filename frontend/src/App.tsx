import React, { Component } from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import logo from './logo.svg';
import './App.css';

import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>genug!</IonCardSubtitle>
              <IonCardTitle>What's next?</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <img src={logo} className="App-logo" alt="logo" />
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;