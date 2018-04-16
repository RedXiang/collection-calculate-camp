'use strict';

function average_uneven(collection) {

  //在这里写入代
  var collection_uneven = [];
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] % 2 != 0) {
      collection_uneven.push(collection[i]);
    }
  }
  for (var j = 0; j < collection_uneven.length; j++) {
    sum += collection_uneven[j];
  }
  var ave = sum / j;
  return ave;
}

module.exports = average_uneven;
