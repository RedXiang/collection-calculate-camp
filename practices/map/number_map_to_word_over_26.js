'use strict';
var number_map_to_word_over_26 = function (collection) {
  var word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i] < 27) {

      result.push(word[collection[i] - 1]);
    }
    else {
      result.push('a'+word[collection[i] - 27] );
    }
  }
  return result;
}

module.exports = number_map_to_word_over_26;

