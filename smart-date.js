'use strict';

var lang = {
    "_t": {},
    "_": function(string) {
        if (string in this._t) {
            return this._t[string];
        }

        return string;
    }
};

/* Filters */
angular.module('corley.filters', []).filter("smartDate", function() {
    return function(date, now) {
        var objDate = new Date(date);
        now = (!now) ? new Date() : now;

        var diff = (now - objDate)/1000;

        if(diff < 60){
            return lang._("less than a minute ago");
        } else if (diff < 3600) {
            return parseInt(diff / 60) + " " + lang._("minutes ago");
        } else if (diff < 84600){
            return lang._("today");
        }

        return date.toLocaleString();
    };
});
