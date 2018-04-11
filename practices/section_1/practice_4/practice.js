function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];
  for (var i = 0; i < collection_a.length; i++) {
    collection_c.push(collection_a[i].key);
  }
  var collection_b = [];
  for (var j = 0; j < object_b.value.length; j++) {
    collection_b.push(object_b.value[j]);
  }
  var result = [];
  for (var k = 0; k < collection_c.length; k++) {
    for (var l = 0; l < collection_b.length; l++) {
      if (collection_c[k] == collection_b[l]) {
        result.push(collection_c[k]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
