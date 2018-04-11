function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_b = [];
  for (var i = 0; i < object_b.value.length; i++) {
    collection_b.push(object_b.value[i]);
  }
  var result = [];
  for (var j = 0; j < collection_a.length; j++) {
    for (var k = 0; k < collection_b.length; k++) {
      if (collection_a[j] == collection_b[k]) {
        result.push(collection_a[j]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
