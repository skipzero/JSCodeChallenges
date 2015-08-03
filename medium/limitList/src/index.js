/* global module */
'use strict';
/*
 * Run the tests by typing 'make' on the command line.
 * You are not allowed to use any non-native libraries.
 */


/**
 * LimitList
 *
 * A LimitList only allows a limited number of items in the list.
 * Once the limit is reached, older items will be removed from the list
 * as new items are added.
 * First in, First out. Also known as FIFO
 *
 * You may not use libraries.
 */
function LimitList(limit) {
	this.limitArry = [];
	this.limit = limit;
	return this;
}

LimitList.prototype = {
  add: function(limit) {

  	var n = this.limit;

  	this.limitArry.unshift(limit);
  	if (this.limitArry.length > n) {
  		return this.limitArry.pop(limit);
  	}
  	return this.limitArry;
  }
  , at: function(n) {
  	return this.limitArry[n];
  }
  , length: function() {
  	return this.limitArry.length;
  }
};
module.exports = LimitList;



			// function LimitList(length) {
	
			// 	this.push = function (newObject) { 

			// 		if (length <= this.length) {
			// 			this.shift();
			// 			this.data = this;
			// 		} 

			// 	    return Array.prototype.push.apply(this,arguments);
			// 	};
			// }

			// LimitList.prototype = [];