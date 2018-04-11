function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var collection_c = [];
  for (var i = 0; i < collection_b[0].length; i++) {
    collection_c.push(collection_b[0][i]);
  }
  var result = [];
  for (var j = 0; j < collection_a.length; j++) {
    for (var k = 0; k < collection_c.length; k++) {
      if (collection_a[j] == collection_c[k]) {
        result.push(collection_a[j]);
      }
    }
  }
  return result;
}

module.exports = collect_same_elements;
