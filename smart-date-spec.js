describe("smart date filter", function() {
    beforeEach(function() {
        module('corley.filter.date');
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

    var dataProvider = [
        {"in": [new Date()], "out": "less than a minute ago"},
        {"in": [new Date(), new Date()], "out": "less than a minute ago"},
        {"in": [new Date(new Date().getTime() - 59 * 1000), new Date()], "out": "less than a minute ago"},
        {"in": [new Date(new Date().getTime() - 60 * 1000), new Date()], "out": "1 minutes ago"},
        {"in": [new Date(new Date().getTime() - 5*60*1000), new Date()], "out": "5 minutes ago"},
        {"in": [new Date(new Date().getTime() - 60*60*1000), new Date()], "out": "today"},
        {"in": [new Date(new Date().getTime() - 23*60*60*1000 + 59*60*1000), new Date()], "out": "today"},
        {"in": [new Date(new Date().getTime() - 24*60*60*1000), new Date()], "out": "yesterday"},
        {"in": [new Date(new Date().getTime() - 48*60*60*1000), new Date()], "out": "2 days ago"},
        {"in": [new Date(new Date().getTime() - 5*24*60*60*1000), new Date()], "out": "5 days ago"},
        {"in": [new Date(new Date().getTime() - 30*24*60*60*1000), new Date()], "out": "1 months ago"},
        {"in": [new Date(new Date().getTime() - 11*30*24*60*60*1000), new Date()], "out": "11 months ago"},
        {"in": [new Date(new Date().getTime() - 12*30*24*60*60*1000), new Date()], "out": "1 years ago"},
        {"in": [new Date(new Date().getTime() - 5*12*30*24*60*60*1000), new Date()], "out": "5 years ago"}
    ];

    it('should say the right sentence', function() {
        var smartDateFilter = _$filter('smartDate');

        for (var i=0; i<dataProvider.length; i++) {
            data = dataProvider[i];
            expect(smartDateFilter(data.in[0], data.in[1])).toBe(data.out);
        }
    });
});
