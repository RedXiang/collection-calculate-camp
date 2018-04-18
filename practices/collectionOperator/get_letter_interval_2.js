'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];
  var number_c;
  function number_to_word(number_c) {
    if (number_c < 27) {
      var letter = word[number_c - 1];
    } else {
      if (number_c % 26 == 0) {
        letter = word[Math.floor(number_c / 26) - 2] + word[25];
      }
      else {
        letter = word[Math.floor(number_c / 26) - 1] + word[number_c % 26 - 1];
      }
    }
    return letter;
  }
  var result = [];
  var number_d = number_a;
  if (number_a < number_b) {
    for (var i = 0; i <= (number_b - number_a); i++) {
      result.push(number_to_word(number_d));
      number_d += 1;
    }
  }
  else if (number_a > number_b) {
    for (var j = 0; j <= (number_a - number_b); j++) {
      result.push(number_to_word(number_d));
      number_d = number_d - 1;
    }
  }
  else {
    result.push(number_to_word(number_a));
  }
  return result;
}

module.exports = get_letter_interval_2;

