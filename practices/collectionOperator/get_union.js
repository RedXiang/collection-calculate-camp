'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = collection_a;
  for(i=0;i<collection_a.length;i++){
    for(j=0;j<collection_b.length;j++){
      if(collection_a[i]!=collection_b[j]){
        collection_c.push(collection_b[j]);
      }
    }
  }
  return collection_c;
}

module.exports = get_union; 

