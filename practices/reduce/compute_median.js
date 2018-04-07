'use strict';

function compute_median(collection) {
  //在这里写入代码
  var result;
  for (var i = 0; i < collection.length - 1; i++) {
    if (collection[i] > collection[i + 1]) {
      var temp = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = temp;
    }
  }
  if (collection.length % 2 == 1) {
    result = collection[(collection.length - 1) / 2];
  }
  if (collection.length % 2 == 0) {
    result = (collection[collection.length / 2] + collection[collection.length / 2 - 1]) / 2;
  }
  return result;
}

module.exports = compute_median;


