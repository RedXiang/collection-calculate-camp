function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [{ key: collection_a[0], count: 1 }];
  var collection = [collection_a[0]];
  var k = 0;
  for (var i = 1; i < collection_a.length; i++) {
    var repeat = false;
    for (var j = 0; j < collection.length; j++) {
      if (collection_a[i] == collection[j]) {
        repeat = true;
        result[k].count += 1;
        break;
      }
    }
    if (!repeat) {
      collection.push(collection_a[i]);
      result.push({ key: collection_a[i], count: 1 });
      k++;
    }
  }
  for (var l = 0; l < result.length; l++) {
    for (var m = 0; m < object_b.value.length; m++) {
      if (result[l].key == object_b.value[m]) {
        result[l].count = result[l].count - Math.floor(result[l].count / 3);
      }
    }
  }
  return result;
}
module.exports = create_updated_collection;
