import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import logo from './logo.svg';

import * as serviceWorker from './serviceWorker';
import { IonApp, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import LoadingApp from './LoadingApp';

ReactDOM.render(
    <Suspense fallback={<LoadingApp />}>
        <App />
    </Suspense>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
