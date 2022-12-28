import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import general from "../locales/de/general";
import landingPage from "../locales/de/landingPage";
import register from "../locales/de/register";
import leaderboard from "../locales/de/leaderboard";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      de: {
        translation: {
          ...general,
          landingPage,
          register,
          leaderboard,
        }
      }
    },
    lng: "de",
    fallbackLng: "de",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n;
