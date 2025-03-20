// src/i18n.ts

import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next/initReactI18next";

export const defaultNS = "translation";

i18next
  .use(initReactI18next)
  .use(HttpApi) // lazy loads translations from /public/locales
  .use(LanguageDetector) // detect user language
  .init({
    debug: true,
    fallbackLng: "en-US",
    defaultNS,
    backend: {
      loadPath: 'locales/{{lng}}/translation.json'
    }
  });

export default i18next;
