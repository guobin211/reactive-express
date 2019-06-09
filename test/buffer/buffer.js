/**
 * buffer
 * @author guobin201314@gmail.com on 2019-06-09
 */

console.log(Object.keys(Buffer));
// ascii编码只能表示1个字符, uft8可以表示中文，中文需要3个字符
let buff = Buffer.alloc(3, 'utf8');
buff[0] = 0x61;
buff[1] = 0x62;
buff[2] = 0x63;
console.log(buff.toString());
// buffer缓存大小 8kb
console.log(Buffer.poolSize);
// 查看buffer的字节大小 1byte=8bit
console.log(buff.byteLength);
const buff2 = Buffer.alloc(12);
buff2.write('你好', 0, 6);
buff2.write('写入', 6, 6);
console.log(buff2.toString());
// 21位整数
let num1 = 123456789098765432101;
console.log(num1 - 1);

// bigint只能和bigint计算
let bigNum = BigInt(12345678909876543210123);
console.log(bigNum);
console.log(bigNum + 1n);
// 16进制
console.log(Buffer.from('好'));

// 2进制数字对应base64的取值范围
let base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
base64 += base64.toLowerCase();
base64 += '0123456789';
base64 += '+/';
console.log(base64)
// 好 = JXU1OTdE


