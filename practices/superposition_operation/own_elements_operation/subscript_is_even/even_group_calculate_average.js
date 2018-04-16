'use strict';
var even_group_calculate_average = function (collection) {
    var collection_p = [];
    var result = [];
    var result1 = [];
    var result2 = [];
    var resuslt3 = [];
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 != 0) {
            collection_p.push(collection[i]);
        }
    }
    for (var j = 0; j < collection_p.length; j++) {
        if (collection_p[j] % 2 == 0) {
            if (collection_p[j].toString.length == 1) {
                result1.push(collection_p[i]);
            }
            else if (collection_p[j].toString.length == 2) {
                result2.push(collection_p[i]);
            }
            else if (collection_p[j].toString.length == 3) {
                result3.push(collection_p[i]);
            }


        }
        else {
            result.push(0);
        }
    }
    var average = function (array) {
        var sum = 0;
        for (var k = 0; k < array.length; k++) {
            sum += array[i];
        }
        var average = sum / k;
    }
    result.push(average(result1));
    result.push(average(result2));
    result.push(average(resuslt3));
    return result;
};
module.exports = even_group_calculate_average;
