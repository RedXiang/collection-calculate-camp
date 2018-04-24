'use strict';
var even_group_calculate_average = function (collection) {
    var result = [];
    var result1 = [];
    var result2 = [];
    var resuslt3 = [];
    var empty1 = true;
    var empty2 = true;
    var empty3 = true;
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 != 0) {
            if (collection[i] % 2 == 0) {
                if (collection[i].toString().length == 1) {
                    result1.push(collection[i]);
                    empty1 = false;
                }
                else if (collection[i].toString().length == 2) {
                    result2.push(collection[i]);
                    empty2 = false;
                }
                else {
                    resuslt3.push(collection[i]);
                    empty3 = false;
                }
            }
        }
    }
    var average = function (array) {
        var sum = 0;
        for (var j = 0; j < array.length; j++) {
            sum += array[j];
        }
        var average = sum / j;
        return average;
    }
    if (empty1 && empty2 && empty3) {
        result = [0];
    }
    else if (empty1 && empty2) {
        result = [average(resuslt3)];
    }
    else {
        result = [average(result1), average(result2), average(resuslt3)];
    }
    return result;
};
module.exports = even_group_calculate_average;
