/**
 * bufferString
 * @author guobin201314@gmail.com on 2019-05-26
 */

const fs = require('fs');

const buf = Buffer.from('hello world', 'ascii');
//
console.log(buf.toString('hex'));
console.log(buf.toString('base64'));
// base64 与 buffer互相转换
const b64 = buf.toString('base64');
console.log(Buffer.from(b64, 'base64').toString());

const file = fs.readFileSync('./c4d.obj');

// console.log(file.toString());

const str = 'hello node.js fs';
// 写入文件
fs.writeFile('./demo.txt', Buffer.from(str, 'ascii'), {flag: 'a'}, (err) => {
  if (err) throw err;
  else {
    console.log('写入成功');
    // 读取文件
    const res = fs.readFileSync('./demo.txt', 'ascii');
    console.log(res);
  }
})

fs.open('./demo.txt', 'w', (err, fd) => {
  if (err) {
    throw err;
  } else {
    fs.fstat(fd, (err, stat) => {
      if (err) {
        throw err;
      } else {
        console.log(stat);
      }
      fs.close(fd, err => {
        if (err) throw err;
      })
    })
  }
})
