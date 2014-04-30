'use strict';

/* Filters */
angular.module('corley.filters', []).
  filter("smartDate", function() {
    return function(date, now){
            var objDate = new Date(date);
            now = (!now) ? new Date() : now;
            var diff = (now - objDate)/1000;
            if(diff < 60){
                return "pochi secondi fa";
            } else if (diff < 3600) {
                return parseInt(diff / 60) + " minuti fa";
            } else if (diff < 84600){
                return "today";
            }
            return date;
        };
    });
