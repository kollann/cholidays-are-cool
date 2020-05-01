'use strict';
import Core_App from "./core.app.js?v=0.11";

/*******************************************************
 *     Hash-based Routes for Single Page Applications.
 *     Routes can are treated like Views. Each Route is
 *     therefore bound to one single (unique) View.
 *
 *     Neuwersch - 2020-03-15
 *******************************************************/

const app = document.getElementById('core_app');

export default class Core_View {
    constructor(slug, template) {
        this.slug = slug;
        this.template = template;
        window.addEventListener("templateChanged", this.listen.bind(this));
    }

    listen(e) {
        if (e.detail.slug == this.slug)
            this.init();
    };

    init() {
        if (window.Core.debugmode)
            console.log("View loaded: " + this.slug);
    }

    isActive(){
        if(window.Core.utils.isEmpty(Core_View.getGetParameters()))
            return (window.location.hash.substr(1).replace('#','') === this.slug);
        else{
            let index = window.location.hash.substr(1).indexOf("?");
            return (window.location.hash.substr(1,index).replace("#","") === this.slug);
        }
    };

    renderMarkup() {
        Core_View.useTemplate(window.Core.system.webRoot + window.Core.system.templatesPath + "/" + this.template + ".tpl",
            app,
            this.slug);
    }

    static useTemplate(templatePath, container, slug = null) {
        return new Promise(resolve => {
            $.get(templatePath, function (tpl) {
                // regular expression
                // searches for <%>
                // . --> any character
                // * --> 0 bis beliebig oft
                // g --> global (in the whole document)
                // i --> case insensitive
                let markers = tpl.match(/<%>.*<%>/gi);

                // run through loop
                // save from index in variable template
                // from template make variable rawstring with  regex .replace(/<%>/gi, '')
                if (markers) {
                    for (let i = 0; i < markers.length; i++) {
                        let template = markers[i];
                        let rawstring = template.replace(/<%>/gi, '');
                        let translation = window.Core.t(rawstring);

                        tpl = tpl.replace(template, translation);
                    }
                }
                container.innerHTML = tpl;

                // Anzeige "logout" Button
                if (slug === "/login") {
                    $("#logout").hide();
                } else {
                    $("#logout").show();
                }

                // hier getParameter speichern
                window.Core.getParams = Core_View.getGetParameters();

                window.dispatchEvent(new CustomEvent("templateChanged", {
                    detail: {
                        slug: slug,
                        template: templatePath
                    }
                }));
                resolve();
            });
        });
    }

    static getGetParameters(){
        let index = window.location.hash.substr(1).indexOf("?");
        if(index!= -1) {
            let parameters= window.location.hash.substr(index+2);
            let result = parameters.split('&').reduce(function(result , item) {
                let parts = item.split('=');
                result[parts[0]] = parts[1];
                return result;
            }, {});
            return(result);
        } else
            return{};
    }
}
