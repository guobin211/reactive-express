const reduce = require('async/reduce');
reduce([1, 2, 3], 0, function (memo, item, callback) {
  process.nextTick(function () {
    callback(null, memo + item);
  });
}, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('结果是:' + result);
});
let arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((prev, item, index, _Arr) => {
  console.log(index);
  console.log(_Arr);
  return prev + item;
}, 0);
console.log(sum);
// 删除和替换
const res = arr.splice(2, 1, 6);
console.log(res);
console.log(arr);
// 截取[0, 2)的元素返回新的数组，浅拷贝
const res2 = arr.slice(0, 2);
console.log(res2);

function bigNumber(x) {
  return x > 5;
}

console.log(arr.every(bigNumber));
console.log(arr.some(bigNumber));
// 查找符合的第一个元素
console.log(arr.find(bigNumber));
// 符合的第一个元素的index
console.log(arr.findIndex(bigNumber));