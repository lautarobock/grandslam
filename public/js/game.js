(function (exports) {
    exports.GameController = function() {
        this.startNewGame = function() {
            console.log('Start new game');
        };
    };
})(typeof exports === 'undefined'? this['game'] = {} : exports );
