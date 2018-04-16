'use strict';
var even_asc_odd_desc = function (collection) {
    var collection_even = [];
    var collection_uneven = [];
    var result = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 == 0) {
            collection_even.push(collection[i]);
        }
        if (collection[i] % 2 != 0) {
            collection_uneven.push(collection[i]);
        }
    }
    for (var j = 0; j < collection_even.length - 1; j++) {
        for (var l = j + 1; l < collection_even.length; l++)
            if (collection_even[j] > collection_even[l]) {
                var temp = collection_even[j];
                collection_even[j] = collection_even[l];
                collection_even[l] = temp;
            }
    }
    for (var k = 0; k < collection_uneven.length; k++) {
        if (collection_uneven[k] < collection_uneven[k + 1]) {
            var temp = collection_uneven[k];
            collection_uneven[k] = collection_uneven[k + 1];
            collection_uneven[k + 1] = temp;
        }
    }
    return collection_even.concat(collection_uneven);
};
module.exports = even_asc_odd_desc;
