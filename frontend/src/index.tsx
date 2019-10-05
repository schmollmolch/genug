import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import { I18nProvider } from '@lingui/react';
import { catalogs, defaultLocale } from "./i18n";

import { Provider } from 'react-redux';

import App from './App';
import LoadingApp from './LoadingApp';
import configureStore from './store';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

const store = configureStore();

ReactDOM.render(
    <Suspense fallback={<LoadingApp />}>
        <I18nProvider language={defaultLocale} catalogs={catalogs}>
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
// Call the element loader after the app has been rendered the first time
defineCustomElements(window);
