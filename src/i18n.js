import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend: {
        // translation file path
        loadPath:"/assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "es",
    // deisabled in production
    debug: true,
    //can have multiple namespaces, in case you want to drive a huge 
    //translation into smaller pices and load them on demand
    ns: ["common", "footer", "login", "layout", "createUsers", "menuPopover", "roles"],
    interpolation: {
        espaceValues: false,
        formatSeparator: ",",
    },
    react : {
        wait: true,
    },
})

export default i18n;