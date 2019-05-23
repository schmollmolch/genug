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
import { AppState } from './store';
import Parent from './components/parent/Parent';
import { Login } from './components/login';

interface AppProps {
  loggedIn: boolean
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
          {(this.props.loggedIn) ?
            <Parent /> : <Login />
          }
        </IonContent>
      </IonApp>
    )
  };
}

const mapStateToProps = (state: AppState) => ({
  loggedIn: state.auth.isLoggedIn || true
});

export default connect(
  mapStateToProps,
  // { pauseTimer, continueTimer }
)(App);
