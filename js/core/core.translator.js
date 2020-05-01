"use strict";

let Core_Language = {};
export default class Core_Translator {
    constructor(...languages){
        this.allowedLanguages = languages;
        this.currentLanguguage = window.Core.utils.getCookie("language") || window.Core.system.defaultLanguage;
        // use fallback language
        if (this.currentLanguguage !== 'de' && this.currentLanguguage !== 'en') {
            this.currentLanguguage = 'de';
        }
    }

    t(key){
        return(typeof Core_Language[this.currentLanguguage][key] === "undefined" ? "-- missing translation: "+key+" --" : Core_Language[this.currentLanguguage][key]);
    }
}

Core_Language.en = {
    logout : "logout",
    username : "username",
    password : "password",
    login : "login",
    german : "german",
    english : "english",
    language : "language",
    city_description : "city description",
    sign_in : "Hello, please register :)"
};

Core_Language.de = {
    logout : "Ausloggen",
    username : "Benutzername",
    password : "Passwort",
    login : "Einloggen",
    german : "Deutsch",
    english : "Englisch",
    language : "Sprache",
    city_description : "Städtebeschreibung",
    sign_in : "Hallo, bitte melde dich an :)"
};