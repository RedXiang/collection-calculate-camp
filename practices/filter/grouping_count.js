'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var result = {};
  var collection_a = [collection[0]];
  for (var i = 0; i < collection.length; i++) {
    var repeat = false;
    result.collection[i] = 0;
    for (var j = 0; j < collection_a.length; j++) {
      if (collection[i] == collection_a[j]) {
        result.collection[i] += 1;
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      collection_a.push(collection[i]);
      result.collection[i] = 1;
    }
  }
  module.exports = grouping_count;
