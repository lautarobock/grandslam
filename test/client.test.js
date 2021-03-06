/**
 * Created with JetBrains WebStorm.
 * User: lautaro
 * Date: 6/06/13
 * Time: 8:29
 * To change this template use File | Settings | File Templates.
 */

//expresso test
//exports.testClient = function(beforeExit,assert) {
//    console.log("bla");
//    assert.equal("Hola","Hola");
//};

var game = require('../public/js/game.js');

//Nodeunit
exports.testClient = function(test) {
    test.expect(3);

    var gameController = new game.GameController({
        username: 'lautaro'
    });
    test.notEqual(null,gameController);

    var newGame = gameController.startNewGame({
        vs: {
            username: 'pepe'
        },
        type: game.GameType.ESCOBA
    });
    test.notEqual(null,newGame);
    test.equal(game.GameType.ESCOBA,newGame.type);

    test.done();
};
