"use strict";
/***************************************************
 *  A Collectorclass for several useful functions.
 *  Contains functions that are general and usable
 *  in different apps.
 *
 *  Neuwersch, 2020-03-15
 ***************************************************/
export default class Core_Utils{
    constructor(){

    }

    // souce: https://www.w3schools.com/js/js_cookies.asp
    setCookie(name, value, days){
     let expireDate;
     if(days){
         let date = new Date();
         date.setTime(date.getTime()+(days*24*60*60*1000));
         expireDate = "; expires=" + date.toGMTString();
     }
     else {
         expireDate = "";
     }
     document.cookie = name+"="+value+expireDate+"; path=/";
    }

    // https://www.w3schools.com/js/js_cookies.asp
    getCookie(name){
        // value von Cookie ausliefern
        let cookiename = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let cookies = decodedCookie.split(";");
        for(let i = 0; i < cookies.length; i++){
            let cookie = cookies[i];
            while(cookie.charAt(0) == " "){
                cookie = cookie.sub(1);
            }
            if(cookie.indexOf(cookiename) == 0){
                return cookie.substring(cookiename.length, cookie.length);
            }
        }
        return "";
    }

    deleteCookie(name){
        this.setCookie(name, "", -1);
    }

    isEmpty(variable){
        if(Array.isArray(variable)) {
            // Array mit keinen Einträgen
            return (variable.length == 0)
        }
        else if(typeof variable === "object"){
            return(Object.entries(variable).length === 0 &&  variable.constructor === Object);
        }
        else {
            return(typeof variable === "undefined" || variable == null || variable == "");
        }
    }
}