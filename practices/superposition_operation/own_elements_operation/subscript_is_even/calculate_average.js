'use strict';
var calculate_average = function (collection) {
    var collection_even = [];
    var sum = 0
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 != 0) {
            collection_even.push(collection[i]);
        }
    }
    for (var j = 0; j < collection_even.length; j++) {
        sum += collection_even[j];
    }
    var ave = sum / j;
    return ave;
}
module.exports = calculate_average;
