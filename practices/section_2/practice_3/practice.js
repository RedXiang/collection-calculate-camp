function count_same_elements(collection) {
  //在这里写入代码
  var result = [{ name: collection[0], summary: 1 }];
  var pattern1 = new RegExp(/([a-z])\[([0-9]+)]/);
  var pattern2 = new RegExp("([a-z])-([0-9]+)");
  var pattern3 = new RegExp("([a-z]):([0-9]+)");
  for (var i = 0; i < collection.length; i++) {
    if (pattern1.test(collection[i])) {
      match = pattern1.exec(collection[i]);
      collection[i] = match[1];
      for (var l = 1; l < parseInt(match[2]); l++) {
        collection.push(match[1]);
      }
    }
    else if (pattern2.test(collection[i])) {
      match = pattern2.exec(collection[i]);
      collection[i] = match[1];
      for (var m = 1; m < parseInt(match[2]); m++) {
        collection.push(match[1]);
      }
    }
    else if (pattern3.test(collection[i])) {
      match = pattern3.exec(collection[i]);
      collection[i] = match[1];
      for (var n = 1; n < parseInt(match[2]); n++) {
        collection.push(match[1]);
      }
    }
  }

  for (var o = 1; o < collection.length; o++) {
    var repeat = false;
    for (var j = 0; j < result.length; j++) {
      if (collection[o] == result[j].name) {
        repeat = true;
        result[j].summary += 1;
      }
    }
    if (!repeat) {
      result.push({ name: collection[o], summary: 1 });
    }
  }

  return result;

}



module.exports = count_same_elements;
