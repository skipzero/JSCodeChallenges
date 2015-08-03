/* global module, console */
'use strict';
/*
 * Run the tests by typing 'make' on the command line.
 * You are not allowed to use any non-native libraries.
 */



/**
 * ISO 8601
 *
 * Your company has a database full of dates in different formats.
 * Your challenge is to write a formatter that can convert these dates
 *  into the ISO 8601 format. YYYY-MM-DD
 *
 * You may not use libraries.
 * ISO 8601 standard: http://en.wikipedia.org/wiki/ISO_8601
 */
function formatter(dateString) {
    var nonWordChar     = /[^\w+]/
        , letter        = /[a-zA-z]/g
        , monthArr      = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
        , dateArray     = dateString.split(dateString.match(nonWordChar));

    console.log(dateArray);

    dateArray = dateArray.map(function(dateItem) {
        dateItem = dateItem.replace(',', '');
        dateItem = monthToDigit(dateItem); 
        dateItem = yearToFirst(dateItem);
        if (dateItem.length === 1) {
            dateItem = '0' + dateItem;
        }
        return dateItem;
    });

console.log('dateArray', dateArray);

        dateArray = dateArray.sort(sortFn).reverse();
        dateArray = dayToEnd(dateArray);
        dateArray = cleanUp(dateArray);
        dateString = dateArray.join('-');

console.log('return', dateString);
    return dateString;
    
    // Find all months and turn into digits
    function monthToDigit (dateItem) {
        if(dateItem.match(letter)) {
            dateItem = dateItem.toLowerCase();

            for(var i = 0; i < monthArr.length; i++) {
                if (monthArr[i].match(dateItem)) {
                    dateItem = (i + 1).toString();
                }
            }
        }
        return dateItem;
    }

    //find all years add 19 to 2 digits
    function yearToFirst(dateItem) {
        if (dateItem > 31) {
            if (dateItem.length === 2) {
                dateItem = '19' + dateItem; 
            }
        }
        return dateItem;
    }

    function dayToEnd (dateArray) {

        if (dateArray[1] > 12) {
            var day = dateArray[1];
            dateArray.splice(1,1);
console.log('SPLICE',dateArray);
            dateArray.push(day);
console.log('TEST', day, dateArray);
        }
        return dateArray;
    }

    function sortFn (a,b) {

        a = parseInt(a, 10);
        b = parseInt(b, 10);

        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    }

    function cleanUp (dateArray) {
        if (dateArray[0].length === 2) {
            dateArray[0] = '19' + dateArray[0];
        }
        return dateArray;
    }
}
module.exports = formatter;
