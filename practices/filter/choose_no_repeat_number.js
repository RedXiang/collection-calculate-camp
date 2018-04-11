'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var result = [collection[0]];
  for (var i = 0; i < collection.length; i++) {
    var repeat = false;
    for (var j = 0; j < result.length; j++) {
      if (collection[i] == result[j]) {
        repeat = true;
        break;
      }
    }
    if (!repeat) {
      result.push(collection[i]);
    }

  }
  return result;
}

module.exports = choose_no_repeat_number;
