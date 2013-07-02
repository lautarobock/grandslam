var game = require('../public/js/game.js');
var model = require('../public/js/model.js');

//Jasmine Test
describe('Suite Client Controller', function() {
	it ('Test Start New Game', function() {
		var gameController = new game.GameController({
        		username: 'lautaro'
    		});
		expect(gameController).toBeDefined();

		var newGame = gameController.startNewGame({
			vs: {
				 username: 'pepe'
			},
			type: game.GameType.ESCOBA
		});
		expect(newGame).toBeDefined();
		expect(newGame.type).toEqual(game.GameType.ESCOBA);
	});
});

describe('Suite Escoba', function() {
	it ('Escoba.incUs()', function () {
		var escoba = new model.Escoba();
		
		expect(escoba).toBeDefined();
		expect(escoba instanceof model.Game).toBeTruthy();

		expect(escoba.us).toEqual(0);
		escoba.incUs(2);
		expect(escoba.us).toEqual(2);

		expect(escoba.them).toEqual(0);
		escoba.incThem(4);
		expect(escoba.them).toEqual(4);
		
		expect(function() {escoba.incUs(-1)}).toThrow({name:'InvalidArgumentException'});
		expect(function() {escoba.incUs(0)}).toThrow({name:'InvalidArgumentException'});
		expect(function() {escoba.incUs()}).toThrow({name:'InvalidArgumentException'});
		expect(function() {escoba.incUs('a')}).toThrow({name:'InvalidArgumentException'});

		expect(function() {escoba.incThem(-1)}).toThrow({name:'InvalidArgumentException'});
		expect(function() {escoba.incThem(0)}).toThrow({name:'InvalidArgumentException'});
		expect(function() {escoba.incThem()}).toThrow({name:'InvalidArgumentException'});
		expect(function() {escoba.incThem('a')}).toThrow({name:'InvalidArgumentException'});
		
	});
});
