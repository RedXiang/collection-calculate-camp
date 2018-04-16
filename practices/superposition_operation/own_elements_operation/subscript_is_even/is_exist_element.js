'use strict';
var is_exist_element = function (collection, element) {
    var collection_p = [];
    var result = false;
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 == 0) {
            collection_p.push(collection[i]);
        }
    }
    for (var j = 0; j < collection_p.length; j++) {
        if (collection[j] == element) {
            result = true;
            break;
        }
    }
    return result;
};
module.exports = is_exist_element;
