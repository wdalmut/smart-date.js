describe("smart-date translations", function() {
    beforeEach(function() {
        module('corley.filter.date');
    });

    var _$filter;
    var _$translate;

    beforeEach(inject(function($filter, $translate) {
        _$filter = $filter;
        _$translate = $translate;

        _$translate.preferredLanguage('en');
        _$translate.use('it');
    }));

    it('should available in italian', function() {
        expect(_$filter('translate')('less than a minute ago')).toBe('meno di un minuto fa');
        expect(_$filter('translate')('today')).toBe('oggi');
    });
});
