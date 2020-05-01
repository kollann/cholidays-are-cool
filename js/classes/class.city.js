"use strict";

export default class City {
    constructor(city){
        Object.assign(this, city);
    }

    // markup für Listenausgabe für City
    getListMarkup(){
        // gestalten mit Bootstrap - CARD!!!!!
/*
        let markup = "<a href='#/city?id="+this["_id"]+"' class='city' data-id='"+this.id+"'>";
            markup += "<p><b>Name: </b>"+this.name+"</p>";
            markup += "<p><b>Country:</b>"+this.country+"</p>";
            markup += "<p><b>Nickname:</b>"+this.nickname+"</p>";
            markup += "<img src="+this.image+">";
        markup += "</div>";*/

        let markup = $(`<div class="card" style="width: 18rem;">
                    <a href='#/city?id=${this._id}' class='city' data-id='"+this.id+"'>
                    <img class="card-img-top" src="${this.image}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <h3 class="card-text">${this.country}</h3>
                        <p class="card-text">${this.nickname}</p>
                     </div>
                     </a>
                </div>`);
        return markup;
    }


    // todo: markup für Detailausgabe für City
    getSingleMarkup(){

    }

}