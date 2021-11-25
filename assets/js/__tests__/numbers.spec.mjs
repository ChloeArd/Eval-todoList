const customMatchers = {
    toBeLessThan: () => {
        return {
            compare: function (actual = 10) {
                const pass = actual < 20;
                const message = pass ? "Expected " + actual + " is less than 20" : "Expected " + actual + " to be greater";
                return {pass: pass, message: message};
            }
        }
    },
    toBeGreaterThan: () => {
        return {
            compare: function (actual = 10) {
                const pass = actual > 5;
                const message = pass ? "Expected " + actual + " is greater than 5" : "Expected " + actual + " to be less";
                return {pass: pass, message: message};
            }
        }
    }
}

describe("test de 2 méthodes", function () {
    beforeEach(function () {
        jasmine.addMatchers(customMatchers);
    })

    it('10 doit être plus petit que 20 et 10 doit être plus grand que 5', function () {
        expect(10).toBeLessThan();
        expect(10).toBeGreaterThan();
    });
});