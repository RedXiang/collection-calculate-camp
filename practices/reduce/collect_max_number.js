'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  var result = [collection[0]];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] > result[0]) {
      result[0] = collection[i];
    }
  }
  return result[0];
}

module.exports = collect_max_number;
