/* global module */
'use strict';
/*
 * Bubble Sort
 * http://simple.wikipedia.org/wiki/Bubble_sort
 * Write a bubble sort algorithm.
 * Run the tests by typing 'make' on the command line.
 * You are not allowed to include any libraries.
 *
 */

function bubbleSort(list) {
  	// Write code here
	var i, j, fwd, bck,
		len = list.length;

	for (j = 0; j < len; j++) {

	    for(i = 0; i < len; i++) {
	        fwd = list[i] + 1,
	        bck = list[i + 1] + 1;
	        if (fwd > bck) {
	            list[i] = bck - 1;
	            list[i + 1] = fwd -1;
	        } 
	        console.log(list)
	    }
	}
  	return list;
}

module.exports = bubbleSort;