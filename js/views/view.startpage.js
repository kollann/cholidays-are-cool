"use strict";
import Core_View from '../core/core.spa-view.js?v=0.11';

export default class StartpageView extends Core_View{
    constructor(slug, template){
        super(slug, template);
    }

    init(){
        super.init();
        $("#logout").unbind("click").on("click", function(e){
            e.preventDefault();
            window.location.hash = "/login";
        });
        this.renderCities();
    }

    async renderCities(){
        let cities = await window.Core.model.getCities();
        for(let city of cities){
            $("#cities_container").append(city.getListMarkup());
        }
    }
}