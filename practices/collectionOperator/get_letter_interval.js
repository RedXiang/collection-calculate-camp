'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  while (number_a < number_b) {
    result.push(word[number_a - 1]);
    number_a += 1;
  }
  while (number_a > number_b) {
    result.push(word[number_a - 1]);
    number_a = number_a - 1;
  }
  if (number_a == number_b) {
    result.push(word[number_a - 1]);
  }
  return result;
}

module.exports = get_letter_interval;
