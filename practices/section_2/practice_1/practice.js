function count_same_elements(collection) {
  //在这里写入代码
  var result = [{key:collection[0],count:1}];
  var collection_a = [collection[0]];
  var k=0;
  for (var i = 1; i < collection.length; i++) {
    var repeat = false;
    for (var j = 0; j < collection_a.length; j++) {
      if (collection[i] == collection_a[j]) {
        repeat = true;
        result[k].count+=1;
        break;
      }
    }
    if (!repeat) {
      collection_a.push(collection[i]);
      result.push({key:collection[i],count:1}) ;
      k++;
    }
  }
  return result;
}
module.exports = count_same_elements;
