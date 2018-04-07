'use strict';

function collect_max_number(collection) {
  //在这里写入代码
  for (var i = 0; i < collection.length - 1; i++) {
    if (collection[i] < collection[i + 1]) {
      var temp = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = temp;
    }
  }
  return collection[0];
}

module.exports = collect_max_number;
