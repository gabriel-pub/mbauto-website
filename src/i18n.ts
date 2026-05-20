import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

import en from "../public/locales/en/translation.json"
import zh from "../public/locales/zh/translation.json"

export const defaultNS = "translation"
export const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
} as const

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: "en",
})

export default i18n
