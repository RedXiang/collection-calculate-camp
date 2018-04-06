'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  if(a<b){
    var collectionA=[a];
    for(i=0;i<(b-a);i++){
      collectionA.push(a+1);
    }
    return collectionA;
  }
  if(a>b){
    var collectionB=[a];
    for(i=0;i<(a-b);i++){
      collectionB.push(a-1);
    }
    return collectionB;
  }
  if(a=b){
    var collectionC=[a];
    return collectionC;
  }
}

module.exports = get_integer_interval;

