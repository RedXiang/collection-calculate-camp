'use strict';

function double_to_one(collection) {

  //在这里写入代码
  var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < collection[i].length; j++) {
      collection_a.push(collection[i][j]);
    }
  }
  var result = [collection_a[0]];
  for (var k = 1; k < collection_a.length; k++) {
    var repeat = false;
    for (var l = 0; l < result.length; l++) {
      if (collection_a[k] == result[l]) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      result.push(collection_a[k]);
    }
  }
  return result;
}

module.exports = double_to_one;
