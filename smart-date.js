'use strict';

/* Filters */
angular.module('corley.filter.date', ['pascalprecht.translate'])
    .config(function($translateProvider){
        $translateProvider.translations('en', {
            "minutes ago": "{{minutes}} minutes ago",
            "days ago": "{{days}} days ago",
            "months ago": "{{months}} months ago",
            "years ago": "{{years}} years ago"
        }).translations('it', {
            "less than a minute ago": "meno di un minuto fa",
            "minutes ago": "{{minutes}} minuti fa",
            "today": "oggi",
            "yesterday": "ieri",
            "days ago": "{{days}} giorni fa",
            "months ago": "{{months}} mesi fa",
            "years ago": "{{years}} anni fa"
        });
    })
    .filter("smartDate", function($filter) {
        return function(date, now) {
            var objDate = new Date(date);
            now = (!now) ? new Date() : now;

            var diff = (now - objDate)/1000;

            if(diff < 60){
                return $filter('translate')("less than a minute ago");
            } else if (diff < 3600) {
                return $filter('translate')("minutes ago", {minutes: parseInt(diff / 60)});
            } else if (diff < 84600) {
                return $filter('translate')("today");
            } else if (diff < 169200) {
                return $filter('translate')("yesterday");
            } else if (diff < 84600*30) {
                return $filter('translate')('days ago', {days: parseInt(diff / 84600)});
            } else if (diff < 84600*30*12) {
                return $filter('translate')('months ago', {months: parseInt(diff / (84600*30))});
            }

            return $filter('translate')('years ago', {years: parseInt(diff / (84600*30*12))});

        };
    });
