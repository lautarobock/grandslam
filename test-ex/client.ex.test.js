/**
 * Created with JetBrains WebStorm.
 * User: lautaro
 * Date: 6/06/13
 * Time: 8:29
 * To change this template use File | Settings | File Templates.
 */
var game = require('../public/js/game.js');

//expresso test
exports.testClient = function(beforeExit,assert) {
    var gameController = new game.GameController({
        username: 'lautaro'
    });
    assert.notEqual(null,gameController);

    var newGame = gameController.startNewGame({
        vs: {
            username: 'pepe'
        },
        type: game.GameType.ESCOBA
    });
    assert.notEqual(null,newGame);
    assert.equal(game.GameType.ESCOBA,newGame.type);
};


