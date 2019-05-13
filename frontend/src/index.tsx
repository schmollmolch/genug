import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { I18nProvider } from '@lingui/react'
import catalogDe from './locales/de/messages.js';
import catalogEn from './locales/en/messages.js';

import App from './App';

import * as serviceWorker from './serviceWorker';
import LoadingApp from './LoadingApp';

const catalogs = { de: catalogDe, en: catalogEn };

ReactDOM.render(
    <Suspense fallback={<LoadingApp />}>
        <I18nProvider language="de" catalogs={catalogs}>
            <App />
        </I18nProvider>
    </Suspense>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
