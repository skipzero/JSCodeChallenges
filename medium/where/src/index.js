/* global module */
'use strict';
/*
 * Run the tests by typing 'make' on the command line.
 * You are not allowed to use any non-native libraries.
 */


/**
 * Filters list for objects that have the same key:value as properties
 *
 * @param {Object} properties An object to use as the filter.
 * @param {[Object]} list The list to filter on.
 * @return {Array} A new array that contains objects in list that match properties

 * var devs = [
 * {'name': 'ripter', powerLevel: 9001, pets: ['Rose']}
 * , {'name': 'Skip', powerLevel: 4000, pets: ['Poe', 'Jynix']}
 * ];


 */
function where(properties, list) {
  // your code here       


    var result = list.filter(function(listItem){
        return testObjects(properties, listItem);
    });


    function testObjects(properties, listItem) {

        var propertiesKeys = Object.keys(properties);
        

        var trueKeys = propertiesKeys.every(function(key){
            var listVal = listItem[key]
                , propertyVal = properties[key];

            if(!listVal) {
                return false; 
            }
                
            if(!Array.isArray(propertyVal)) {
                if(propertyVal === listVal) {
                    return true;
                } 
            } else {
                return forArrays(propertyVal, listVal);
            }

        });
        return trueKeys;
    }

    function forArrays(propertyVal, listVal) {
        // forArr()
        for(var i = 0; i < listVal.length; i++) {

            for(var j = 0; j < propertyVal.length; j++) {
                if (listVal[i] === propertyVal[j]) {
                    return true;
                }
            }
        }
    }


    return result;
 }

module.exports = where;



