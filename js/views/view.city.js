"use strict";
import Core_View from '../core/core.spa-view.js?v=0.11';

export default class CityView extends Core_View {
    constructor(slug, template){
        super(slug, template);
        this.city = undefined;
    }

    init(){
        super.init();
        let self = this;
        Core.model.getCity(Core.getParams["id"]).then((result) => {
            if(Core.utils.isEmpty(Core.getParams["id"]) || result == undefined)
                window.location.hash = "/";
            else{
                self.city = result;
                self.render();
            }
        });
    }

    render() {
        $('#city_description').html(this.city.getSingleMarkup());
    }
}