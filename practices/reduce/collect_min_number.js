'use strict';

function collect_min_number(collection) {
  //在这里写入代码
  for (var i = 0; i < collection.length - 1; i++) {
    for(var j=i+1;j<collection.length;j++){
    if (collection[i] > collection[j]) {
      var temp = collection[i];
      collection[i] = collection[j];
      collection[j] = temp;
    }
  }
}
  return collection[0];
}

module.exports = collect_min_number;

