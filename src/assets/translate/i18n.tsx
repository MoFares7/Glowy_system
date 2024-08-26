import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

//? Translations
// import * as langs from "@/config/import/locales";

const resources = {
  // en: {
  //   translation: langs.ENGLISH,
  // },
  // ar: {
  //   translation: langs.ARABIC,
  // },
  // tr: {
  //   translation: langs.TURKEY,
  // },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: localStorage.getItem("i18nextLng") || "en",
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
