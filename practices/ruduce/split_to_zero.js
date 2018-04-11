'use strict';

function spilt_to_zero(number, interval) {
  //在这里写入代码
  var result = [number];
  while (number > 0) {
    number = number - interval;
    number = Number(number.toFixed(1));
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
