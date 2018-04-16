'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  var result = 0;
  for (var i = 0; i < collection.length; i++) {
    collection[i] = collection[i] * 3 + 2;
  }
  for (var j = 0; j < collection.length; j++) {
    result = result + collection[j];
  }
  return result;
}

module.exports = hybrid_operation;

