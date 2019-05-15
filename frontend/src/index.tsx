import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import { I18nProvider } from '@lingui/react'
import catalogDe from './locales/de/messages.js';
import catalogEn from './locales/en/messages.js';

import { Provider } from 'react-redux'

import App from './App';
import LoadingApp from './LoadingApp';
import configureStore from './store';
import moment from 'moment';

const catalogs = { de: catalogDe, en: catalogEn };
// FIXME: load locale upon language change and maybe not using require
require('moment/locale/de');
moment.locale('de');

const store = configureStore();

ReactDOM.render(
    <Suspense fallback={<LoadingApp />}>
        <I18nProvider language="de" catalogs={catalogs}>
            <Provider store={store}>
                <App />
            </Provider>
        </I18nProvider>
    </Suspense>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
