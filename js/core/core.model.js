"use strict";
import City from "../classes/class.city.js?v=0.11";

const cities_json = "./cities.json";

export default class Core_Model {
    constructor() {

    }

    getCities() {
        return new Promise(resolve => {
            // data = alles von JSON als array
            $.getJSON(cities_json, function (data) {
                let cities = [];
                for (let city of data) {
                    cities.push(new City(city));
                }
                resolve(cities);
            });
            // Fehlerfall programmieren
        });
    }

    // zum Beispiel
    // getCityBy ("name", "Paris"); --> die Stadt Paris!
    getCityBy(key, value) {
        return new Promise(resolve => {
            $.getJSON(cities_json, function (data) {
                for (let city of data) {
                    if (city[key] == value) {
                        resolve(new City(city));
                    }
                }
            });
        });
    }

    async getCity(id) {
        // await + async
        // alles hinter await (erst wenn Promise ausgeführt) wird dann ausgeführt
        return (await this.getCityBy("_id", id));
    }

    getHotels() {

    }

    getHotelBy(key, value) {
        return (this.getHotelBy("_id", id));
    }

    getHotel(id) {

    }

    // ruft auch getHotel auf
    getHotelsOfCity(cityID) {

    }
}