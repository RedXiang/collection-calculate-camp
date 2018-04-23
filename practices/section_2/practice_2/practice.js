function count_same_elements(collection) {
  //在这里写入代码
  var result = [{ key: collection[0], count: 1 }];
  var collection_noRepeat = [collection[0]];
  var k = 0;
  for (var i = 1; i < collection.length; i++) {
    if (collection[i].length > 1) {
      collection[i] = collection[i].split("-");
      for (var l = 1; l <collection[i][1]; l++) {
        collection.push(collection[i][0]);
      }
      collection[i]=collection[i][0];
    }
    var repeat = false;
    for (var j = 0; j < collection_noRepeat.length; j++) {
      if (collection[i] == collection_noRepeat[j]) {
        result[k].count += 1;
        repeat = true;
      }
    }
    if (!repeat) {
      collection_noRepeat.push(collection[i]);
      result.push({ key: collection[i], count: 1 });
      k++;
    }

  }
  return result;
}

module.exports = count_same_elements;
