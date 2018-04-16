'use strict';
var calculate_median = function (collection) {
    var collection_p = [];
    var result;
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 != 0) {
            collection_p.push(collection[i]);
        }
    }
    var j = collection_p.length;
    if (j % 2 != 0) {
        result = collection_p[(j - 1) / 2];
    }
    else {
        result = (collection_p[j / 2] + collection_p[j / 2-1]) / 2;
    }
    return result;
}
module.exports = calculate_median;
