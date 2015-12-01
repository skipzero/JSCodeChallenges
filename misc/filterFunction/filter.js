'use strict';

function undefinedFilter (obj) {
	let objArr = Object.keys(obj)
		, newObj = {};

	objArr.map(function(key, i){
		if (obj[key] != null || obj[key] != undefined) {
			newObj[key] = obj[key];
		}
		return newObj;	
	});
	return newObj;
}

let foo = {
	dog : 'rose',
	water : null,
	wiskey : undefined,
	beer : 'fosters'
}

undefinedFilter(foo);