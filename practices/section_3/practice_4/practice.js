function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var result = [{ key: collection_a[0], count: 1 }];
  var collection_noRepeat = [collection_a[0]];
  var n = 0;
  for (var i = 1; i < collection_a.length; i++) {
    var repeat = false;
    if (collection_a[i].length > 1) {
      collection_a[i] = collection_a[i].split("-");
      for (var k = 1; k < collection_a[i][1]; k++) {
        collection_a.push(collection_a[i][0]);
      }
      collection_a[i] = collection_a[i][0];
    }
    for (var j = 0; j < collection_noRepeat.length; j++) {
      if (collection_a[i] == collection_noRepeat[j]) {
        repeat = true;
        result[n].count += 1;
        break;
      }
    }
    if (!repeat) {
      collection_noRepeat.push(collection_a[i]);
      result.push({ key: collection_a[i], count: 1 });
      n++;
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
