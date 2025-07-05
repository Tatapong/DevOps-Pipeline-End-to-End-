// Set language
import i18n from "../../functions/i18n";
import Cookies from "universal-cookie";
import { setLanguage } from "../reducers/language";

const cookie = new Cookies()

export const changeLanguage = (language) => async (dispatch, getState) => {
  try {
    await i18n.changeLanguage(language);
    cookie.set("language", language)
    dispatch(setLanguage(language));
    console.log(language)
  }catch (e) {
    console.log(e)
  }
};
