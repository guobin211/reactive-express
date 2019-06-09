/**
 * parseInt
 * @author guobin201314@gmail.com on 2019-06-09
 */
// 进制转换

let num = '11';
// 任意进制转10进制
console.log(parseInt(num, 2));

console.log(parseInt(num, 8));

console.log(parseInt(num, 10));

console.log(parseInt(num, 16));

// 10进制转2进制/8进制/16进制
let r2 = 3;
let r8 = 9;
let r10 = 11;
let r16 = 17;

console.log(r2.toString(2));
console.log(r8.toString(8));
console.log(r10.toString(10));
console.log(r16.toString(16));
