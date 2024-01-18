import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationFR from './fr/translation.json';
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18next.use(initReactI18next).init({
  lng: 'cimode', // if you're using a language detector, do not define the lng option
  debug: true,
  resources,
  ns: ['translation', 'translationFr'],
  // if you see an error like: "Argument of type 'DefaultTFuncReturn' 
  // is not assignable to parameter of type xyz"
  // set returnNull to false (and also in the i18next.d.ts options)
  // returnNull: false,
});

// i18next.on('languageChanged', function(lng) {
//     console.log('event triggered',lng);
// })
