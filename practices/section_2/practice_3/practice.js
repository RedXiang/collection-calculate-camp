function count_same_elements(collection) {
  //在这里写入代码
  var result = [{ name: collection[0], summary: 1 }];
  var k = 0;
  var collection_noRepeat = [collection[0]];
  var object = [];
  var pattern1 = new RegExp(/([a-z])\[([0-9]+)]/);
  var pattern2 = new RegExp("([a-z])-([0-9]+)");
  var pattern3 = new RegExp("([a-z]):([0-9]+)");
  for (var i = 1; i < collection.length; i++) {
    if (pattern1.test(collection[i])) {
      match = pattern1.exec(collection[i]);
      object.push({
        name: match[1],
        summary: match[2]
      });
    }
    else if (pattern2.test(collection[i])) {
      match = pattern2.exec(collection[i]);
      object.push({
        name: match[1],
        summary: match[2]
      });
    }
    else if (pattern3.test(collection[i])) {
      match = pattern3.exec(collection[i]);
      object.push({
        name: match[1],
        summary: match[2]
      });
    }
    else {
      var repeat = false;
      for (var j = 0; j < collection_noRepeat.length; j++) {
        if (collection[i] == collection_noRepeat[j]) {
          repeat = true;
          result[k].summary += 1;
        }
      }
      if (!repeat) {
        collection_noRepeat.push(collection[i]);
        result.push({ name: collection[i], summary: 1 });
        k++;
      }

    }
  }
  console.log(object);


}



module.exports = count_same_elements;
