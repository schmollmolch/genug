// import { setupI18n, Catalogs } from '@lingui/core';
import catalogDe from "./locales/de/messages.js";
import catalogEn from "./locales/en/messages.js";
import moment from "moment";

export const locales = {
  en: "English",
  de: "Deutsch"
};
export const defaultLocale = navigator.language.split("-")[0] || "de";
// FIXME: load locale upon language change and maybe not using require
require("moment/locale/de");
moment.locale(defaultLocale);

// const loadCatalog = async (locale: string): Promise<Catalogs> => {
//     return import(/* webpackMode: 'lazy', webpackChunkName: 'i18n-[index]' */
//         `./locales/${locale}/messages.js`);
// }

// FIXME: Do it this way: https://dev.to/stereobooster/i18n-of-react-with-linguijs-1-24oi
export const catalogs = { de: catalogDe, en: catalogEn };

// export const i18n = setupI18n();
// i18n.activate willActivate(loadCatalog);
