/**
 * open
 * @author guobin201314@gmail.com on 2019-06-09
 */
const fs = require('fs');
// 0 process.stdout 1 process.stdin 2 process.error
// 自增文件描述符 21
const fd = fs.openSync('demo.txt', 'r');
// 22
fs.open('demo.txt', 'r', function (err, fdd) {
  if (err) console.log(err);
  console.log('fdd:' + fdd);
});
console.log('fd:' + fd);

const rs = fs.createReadStream('demo.txt', {
  flags:'r',
  encoding: 'utf8',
  start: 0
})
const buffs = [];

rs.on('readable', function () {
  console.log('readable...');
  let buf;
  // 1个byte
  while ((buf = rs.read(1)) != null) {
    buffs.push(buf);
  }
})

rs.on('data', function (data) {
  console.log('data:' + data);
})

rs.on('end', function () {
  console.log('end');
})
