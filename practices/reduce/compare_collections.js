'use strict'

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.length; j++) {
      if (collection_a[i] == collection_b[j]) {
        console.log(i);
        console.log(j);
        console.log(collection_a[i]);
        console.log(collection_b[j]);
        return true;
      }
    }
  } 
}

module.exports = compare_collections;


