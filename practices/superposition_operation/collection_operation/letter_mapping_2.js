'use strict';

function average_to_letter(collection) {

  //在这里写入代码
  var word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result;
  var sum = 0;
  for (var i = 0; i < collection.length; i++) {
    sum += collection[i];
  }
  var evr = sum / i;
  result = word[Math.floor(evr)];
  return result;
}

module.exports = average_to_letter;

