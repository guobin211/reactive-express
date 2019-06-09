/**
 * fileBuff
 * @author guobin201314@gmail.com on 2019-06-09
 */

const fs = require('fs');
const path = require('path');
const bigFile = 1024 * 1024;
/**
 * O_RDONLY 只读 'r'
 * O_SYNC
 * O_RDWR 读写
 * O_CREATE
 * O_WRONLY
 * O_EXCL 排他操作，锁
 * @type {string}
 */
let txt = fs.readFileSync('demo.txt', {
  encoding: 'utf8',
  flag: 'r'
});
console.log(txt);

fs.writeFileSync('demo.txt', Buffer.from('追加字符'),{
  encoding:'utf8',
  flag:'a'
})

console.log(txt);
