'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var collection_new = collection.split("->");
  var result;
  for (var j = 0; j < collection_new.length; j++) {
    collection_new[j] = parseInt(collection_new[j]);
  }
  for (var k = 0; k < collection_new.length - 1; k++) {
    for (var l = k + 1; l < collection_new.length; l++) {
      if (collection_new[k] > collection_new[l]) {
        var temp = collection_new[k];
        collection_new[k] = collection_new[l];
        collection_new[l] = temp;
      }
    }
  }
  var i = collection_new.length;
  if (i % 2 == 0) {
    result = (collection_new[i/2] + collection_new[i/2-1]) / 2;
  }
  else {
    result = collection_new[(i - 1) / 2];
  }
  return result;
}

module.exports = compute_chain_median;
