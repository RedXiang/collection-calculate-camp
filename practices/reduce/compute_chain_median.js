'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  var collection_a = [];
  var result;
  for (var i = 0; i < collection.length; i + 3) {
    collection_a.push(collection[i]);
  }
  if (collection_a.length % 2 != 0) {
    result = collection_a[(collection_a.length + 1) / 2];
  }
  else {
    var sum = collection_a[collection_a.length / 2] + collection_a[collection_a.length / 2 + 1];
    result = sum / 2;
  }
}

module.exports = compute_chain_median;
