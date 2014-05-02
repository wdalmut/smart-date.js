describe("smart date filter", function() {
    beforeEach(function() {
        module('corley.filters');
    });

    var _$filter;
    var _$translate;

    beforeEach(inject(function($filter, $translate) {
        _$filter = $filter;
        _$translate = $translate;
        _$translate.preferredLanguage('en');
        _$translate.use('en');
    }));

    it('should has a smartDate filter', function() {
        expect(_$filter('smartDate')).not.toBeNull();
    });

    it('should say just now', function() {
        var smartDateFilter = _$filter('smartDate');

        expect(smartDateFilter(new Date())).toBe('less than a minute ago');
        expect(smartDateFilter(new Date(new Date().getTime() - 59000), new Date()))
            .toBe('less than a minute ago');
    });

    it('should say 5 minutes ago', function() {
        var smartDateFilter = _$filter('smartDate');
        expect(smartDateFilter(new Date(new Date().getTime() - 5*60000), new Date()))
            .toBe('5 minutes ago');
    });

    it('should say 59 minutes ago', function() {
        var smartDateFilter = _$filter('smartDate');
        expect(smartDateFilter(new Date(new Date().getTime() - 59*60000), new Date()))
            .toBe('59 minutes ago');
    });

    it('should say today', function() {
        var smartDateFilter = _$filter('smartDate');
        expect(smartDateFilter(new Date(new Date().getTime() - 70*60000), new Date()))
            .toBe('today');
    });

    it('should say yesterday', function() {
        var smartDateFilter = _$filter('smartDate');
        expect(smartDateFilter(new Date(new Date().getTime() - 1000*60*60*24), new Date()))
            .toBe('yesterday');
    });

    it('should print 2 days ago', function() {
        var smartDateFilter = _$filter('smartDate');
        expect(smartDateFilter(new Date("1970/01/01"), new Date("1970/01/03"))).toBe('2 days ago');
    });

    it('should print 1 months ago', function() {
        var smartDateFilter = _$filter('smartDate');
        expect(smartDateFilter(new Date("1970/01/01"), new Date("1970/02/01"))).toBe('1 months ago');
    });

    it('should print 5 years ago', function() {
        var smartDateFilter = _$filter('smartDate');
        expect(smartDateFilter(new Date("1970/01/01"), new Date("1975/01/01"))).toBe('5 years ago');
    });
});
