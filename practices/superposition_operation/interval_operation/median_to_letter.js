'use strict';

function median_to_letter(collection) {

  //在这里写入代码
  var word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var median;
  var j = collection.length;
  var result;
  if (j % 2 != 0) {
    median = collection[(j - 1) / 2];
  }
  else {
    median = (collection[j / 2] + collection[j / 2 - 1]) / 2;
  }
  if (Math.floor(median) < 26) {
    result = word[Math.floor(median)];
  }
  else {
    result = word[0] + word[Math.floor(median) % 26];
  }
  return result;
}

module.exports = median_to_letter;
