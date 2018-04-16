'use strict';
function rank_by_two_large_one_small(collection) {
  //这里写代码。。。
  for (var i = 0; i < collection.length - 1; i++) {
    for (var j = i + 1; j < collection.length; j++) {
      if (collection[i] > collection[j]) {
        var temp = collection[i];
        collection[i] = collection[j];
        collection[j] = temp;
      }
    }
  }
  for (var k = 0; k < collection.length - 2; k++) {
    if (k % 3 == 0) {
      var temp = collection[k];
      collection[k] = collection[k + 1];
      collection[k+1]=collection[k+2];
      collection[k + 2] = temp;
    }
  }
  return collection;
}
module.exports = rank_by_two_large_one_small;
