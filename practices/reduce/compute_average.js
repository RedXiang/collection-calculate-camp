'use strict';

function compute_average(collection) {
  //在这里写入代码
  var result;
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i]
  }
  result = sum / collection.length;
  return result;
}

module.exports = compute_average;

