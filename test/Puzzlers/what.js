/**
 * what
 *
 * @author GuoBin on
 */
'use strict';

function log(param) {
  console.log(param);
}

log(parseInt('2'));
// [1, NaN, NaN]
log(['1', '2', '3'].map(parseInt));
log(['1', '2', '3'].map((val, index, arr) => {
  console.log(index);
  // console.log(arr);
  return parseInt(val, 10);
}));
// 'object', false
log([typeof null, null instanceof Object]);
// 81
const res = [[3, 2, 2].reduce(Math.pow)];
log(res);
const END = Math.pow(2, 53);
log(END);
const a = 0.2;
const b = 0.1;
const c = 0.8;
const d = 0.6;
const bool1 = a - b === b;
console.log(a - b); // 0.1
console.log(c - d); // 0.20000000000007
const bool2 = c - d === 1;
log(bool1);
log(bool2);
console.log(String('a'));

function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return num % 2 === 0;
}

function isSane(num) {
  return isEven(num) || isOdd(num);
}

console.log(true || false);
console.log(isSane(7));
// true
console.log(Array.isArray(Array.prototype));
console.log(Array);
console.log(Array.prototype);

console.log('5' + 3);
console.log('5' - 3);
// 2
console.log(1 + - + + + - + 1);



