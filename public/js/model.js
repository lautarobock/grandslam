(function (exports) {
	/**
	 * Game Abstract Class
	 *
	 * */
	exports.Game = function() {
	
	};


	exports.Escoba = function() {
		this.us = 0;
		this.them = 0;

		this.incUs = function(value) {
			if ( !value || isNaN(value) || value <= 0 ) {
				throw {name:'InvalidArgumentException'};
			}
			this.us += value;
		};

		this.incThem = function(value) {
			if ( !value || isNaN(value) || value <= 0 ) {
				throw {name:'InvalidArgumentException'};
			}
			this.them += value;
		};
		
	};
	
	exports.Escoba.prototype = new exports.Game();
   
})(typeof exports === 'undefined'? this['model'] = {} : exports );
