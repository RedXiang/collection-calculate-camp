'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  result[collection[0].toString()] = 1;
  var collection_a = [collection[0]];
  for (var i = 1; i < collection.length; i++) {
    var repeat = false;
    for (var j = 0; j < collection_a.length; j++) {
      if (collection[i] == collection_a[j]) {
        repeat = true;
        result[collection[i].toString()] = result[collection[i].toString()] + 1;
        break;
      }
    }
    if (!repeat) {
      collection_a.push(collection[i]);
      result[collection[i].toString()] = 1;
    }

  }
  return result;
}
module.exports = grouping_count;
