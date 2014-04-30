'use strict';

/* Filters */
angular.module('corley.filters', ['pascalprecht.translate'])
    .config(function($translateProvider){
        $translateProvider.translations('it', {
            "less than a minute ago": "meno di un minuto fa",
            "minute ago": "minuti fa",
            "today": "oggi"
        });
    })
    .filter("smartDate", function() {
        return function(date, now) {
            var objDate = new Date(date);
            now = (!now) ? new Date() : now;

            var diff = (now - objDate)/1000;

            if(diff < 60){
                return "less than a minute ago";
            } else if (diff < 3600) {
                return parseInt(diff / 60) + " " + "minutes ago";
            } else if (diff < 84600){
                return "today";
            }

            return date.toLocaleString();
        };
    });
