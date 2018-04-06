'use strict';

function collect_last_element(collection) {
  //在这里写入代码
  var j=-1;
  for(var i=0;i<collection.length;i++){
    j +=1;
  }
  var result=collection[j];
  return result;
}
module.exports = collect_last_element;
