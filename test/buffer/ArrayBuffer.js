const buff = new ArrayBuffer(16);
// -128 + 127
const int8 = new Int8Array(4);
// 0 255
const uint8 = new Uint8Array(4);
const int16 = new Uint16Array(4);
const int32 = new Uint16Array(4);
const int64 = new Uint16Array(4);
console.log(buff);
console.log(int8.length);
console.log(uint8.length);
console.log(int16.length);
console.log(int32.length);
console.log(int64.length);
const res = Uint8Array.from([21, 12, 13, 14, 25]);
console.log(res);
