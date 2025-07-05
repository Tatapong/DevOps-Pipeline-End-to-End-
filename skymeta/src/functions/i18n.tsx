import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from "universal-cookie";

import gb from "./locale/gb";
import fr from "./locale/fr";
import tr from "./locale/tr";

const cookies = new Cookies();

cookies.get("language");

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      debug: false,
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources: { gb, fr, tr },
      // if you're using a language detector, do not define the lng option
      fallbackLng: cookies.get("language") ? cookies.get("language") : "gb",

      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });


    export default i18n;