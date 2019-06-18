const res = Reflect.apply(Math.floor, undefined, [1,75]);
console.log(res);
const str = Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
console.log(str);