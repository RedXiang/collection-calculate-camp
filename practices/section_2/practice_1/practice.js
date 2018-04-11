function count_same_elements(collection) {
  //在这里写入代码
  var result = {};
  var collection_a = [];
  for (var i = 0; i < collection.length; i++) {
    var repeat = false;
    var j;
    result.collection_a[j] = 0;
    for (j = 0; j < collection_a.length; j++) {
      if (collection[i] == collection_a[j]) {
        repeat = true;
        result.collection_a[j] += 1
        break;
      }
    }
    if (!repeat) {
      collection_a.push(collection[i]);
    }
  }
  return result;
}
module.exports = count_same_elements;
