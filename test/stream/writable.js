/**
 * writable 可写流 fs, http, socket, std,
 * @author guobin201314@gmail.com on 2019-06-09
 */

const fs = require('fs');
const videoFile = '/Users/guobin/vscode/reactive-express/file/头号玩家.mkv';
const targetFile = '/Users/guobin/vscode/reactive-express/file/头号玩家2.mkv';

const rs = fs.createReadStream('./read.txt', {flags: 'r'});
const ws = fs.createWriteStream('./write.txt', {flags: 'w'});

// console.log(Object.keys(rs));
// console.log(Object.keys(ws));
const buffList = [];
// 一次读取的byte
const byteSize = 2;
let first = true;
// 读取buffer
rs.on('data', (chunk) => {
  if (first) {
    console.log(chunk.length);
    first = false;
  }
  // 写入chunk
  ws.write(chunk);
});
// input stream
rs.on('readable', () => {
  let buff;
  while ((buff = rs.read(byteSize)) !== null) {
    buffList.push(buff);
  }
});

rs.on('end', () => {
  console.log('读取结束');
  console.log(buffList.length);
});
