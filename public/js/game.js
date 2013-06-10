(function (exports) {
    exports.GameController = function() {
        this.startNewGame = function(params) {
            console.log('Start new game with: ' + params.vs.username);
            return {
                type:params.type
            };
        };
    };

    exports.GameType = {
        ESCOBA: 'ESCOBA'
    }
})(typeof exports === 'undefined'? this['game'] = {} : exports );
