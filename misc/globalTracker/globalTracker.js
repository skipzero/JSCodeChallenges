'use strict';

let globalTracker = {
	start : function() {
		let startingArray = Object.keys( window );
		return startingArray;
	},

	change : function() {
		let changedArray = Object.keys( window );
	}
}
console.log(globalTracker.start())