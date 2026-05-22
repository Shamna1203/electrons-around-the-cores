describe('Electrons Around The Cores', function() {
    beforeEach(function() {
        game = new ElectronsAroundTheCores();
    });

    it('should return 6 for [1,2,3,4,5]', function() {
        expect(game.calculate([1,2,3,4,5])).toEqual(6);
    });
});