'use strict';
var single_element = function (collection) {
    var collection_p = [];
    var result = [];
    for (var k = 0; k < collection.length; k++) {
        if (k % 2 != 0) {
            collection_p.push(collection[k]);
        }
    }
    for (var i = 0; i < collection_p.length; i++) {
        var repeat = false;
        for (var j = 0; j < collection_p.length; j++) {
            if (j == i) {
                continue;
            }
            else {
                if (collection_p[i] == collection_p[j]) {
                    repeat = true;
                    break;
                }
            }
        }
        if (!repeat) {
            result.push(collection_p[i]);
        }
    }
    return result;

}
module.exports = single_element;
