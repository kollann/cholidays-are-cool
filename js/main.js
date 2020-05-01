"use strict";
import Core_App from './core/core.app.js?v=0.11';
import LoginView from './views/view.login.js?v=0.11';
import StartpageView from './views/view.startpage.js?v=0.11';
import CityView from "./views/view.city.js?v=0.11";

//First route is Startpage.
let routes = [
    new StartpageView("/", "startpage"),
    new LoginView("/login", "login"),
    new CityView("/city", "city"),
];

const C_Holidays_App = new Core_App("http://localhost/cholidays-are-cool/", "templates", routes, "de","en");