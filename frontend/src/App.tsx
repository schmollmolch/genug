import React from "react";
import "./App.css";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import logo from "./logo.svg";

import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle
} from "@ionic/react";

import { connect } from "react-redux";
import { AppState } from "./store";
import { ParentView } from "./components/parent";
import { Login } from "./components/login";

interface AppProps {
  loggedIn: boolean;
}

const App = (props: AppProps) => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>
            <img src={logo} className="genug-logo" alt="logo" />
            genug!
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>{props.loggedIn ? <ParentView /> : <Login />}</IonContent>
    </IonApp>
  );
};

const mapStateToProps = (state: AppState) => ({
  loggedIn: state.auth.isLoggedIn === true
});

export default connect(mapStateToProps)(App);
