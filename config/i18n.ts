import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingPage from "../locales/de/landingPage";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ...landingPage,
    },
    lng: "de",
    fallbackLng: "de",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;
