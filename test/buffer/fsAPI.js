/**
 * fsAPI
 * @author guobin201314@gmail.com on 2019-05-26
 */
const fs = require('fs');

/**
 * filename, 必选参数，文件名
 * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

fs.readFile(__dirname + '/test.txt', {flag: 'r+', encoding: 'utf8'}, function (err, data) {
  if(err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const w_data = '这是一段通过fs.writeFile函数写入的内容；\r\n';

/**
 * filename, 必选参数，文件名
 * data, 写入的数据，可以字符或一个Buffer对象
 * [options],flag,mode(权限),encoding
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

fs.writeFile(__dirname + '/test.txt', w_data, {flag: 'a'}, function (err) {
  if(err) {
    console.error(err);
  } else {
    console.log('写入成功');
  }
});

fs.appendFile(__dirname + '/test.txt', '使用fs.appendFile追加文件内容', function () {
  console.log('追加内容完成');
});

const rs = fs.createReadStream('./test.txt',  {start: 0, end: 2});

// open是ReadStream对象中表示文件打开时事件，
rs.on('open', function (fd) {
  console.log('开始读取文件');
});

rs.on('data', function (data) {
  console.log(data.toString());
});

rs.on('end', function () {
  console.log('读取文件结束')
});
rs.on('close', function () {
  console.log('文件关闭');
});

rs.on('error', function (err) {
  console.error(err);
});

//暂停和回复文件读取；
rs.on('open', function () {
  console.log('开始读取文件');
});

rs.pause();

rs.on('data', function (data) {
  console.log(data.toString());
});

setTimeout(function () {
  rs.resume();
}, 3000);
