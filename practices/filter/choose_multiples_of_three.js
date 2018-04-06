'use strict';

function choose_multiples_of_three(collection) {
      var result=[];
  //在这里写入代码
  for(var i=0;i<collection.length;i++){
    if(collection[i]%3==0){
      result.push(collection[i]);
    }
  }
  return result;
}

module.exports = choose_multiples_of_three;
