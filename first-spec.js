describe("corley.filters", function() {
    beforeEach(function() {
        module('corley.filters');
    });

    it('should has a smartDate filter', inject(function($filter) {
        expect($filter('smartDate')).not.toBeNull();
    }));

    it('should say just now', inject(function(smartDateFilter) {
        expect(smartDateFilter(new Date())).toBe('pochi secondi fa');
        expect(smartDateFilter(new Date(new Date().getTime() - 59000), new Date())).toBe('pochi secondi fa');
    }));

    it('should say 5 minutes ago', inject(function(smartDateFilter) {
        expect(smartDateFilter(new Date(new Date().getTime() - 5*60000), new Date()))
            .toBe('5 minuti fa');
    }));

    it('should say 59 minutes ago', inject(function(smartDateFilter) {
        expect(smartDateFilter(new Date(new Date().getTime() - 59*60000), new Date()))
            .toBe('59 minuti fa');
    }));

    it('should say today', inject(function(smartDateFilter) {
        expect(smartDateFilter(new Date(new Date().getTime() - 70*60000), new Date()))
            .toBe('today');
    }));
});
