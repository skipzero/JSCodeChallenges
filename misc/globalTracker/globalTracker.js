'use strict';

let globalTracker = {
	start : function() {
		let startingArray = Object.keys( window );
	},

	change : function() {
		let changedArray = Object.keys( window );
	}
}

console.log(globalTracker.start())