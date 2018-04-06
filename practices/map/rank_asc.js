'use strict';
var rank_asc = function(collection){
  for(var i=0;i<collection.length-1;i++){
    for(var j=i+1;j<collection.length;j++){
    if(collection[i]<collection[j]){
       var temp=collection[i];
       collection[i]=collection[j];
       collection[j]=temp;
    }
  }
  }
  return collection;
}

module.exports = rank_asc;
