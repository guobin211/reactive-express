const fs = require('fs');
const mime = require('mime');
const zlib = require('zlib');

const path = '/Users/guobin/vscode/reactive-express/test/stream/read.txt';
const video = '/Users/guobin/vscode/reactive-express/file/头号玩家.mkv';

console.log(mime.getType(path));
console.log(mime.getExtension('text/plain'));

const videoType = mime.getType(video);
// 文件编码格式
console.log(videoType);
// 文件扩展名
console.log(mime.getExtension(videoType));
// 压缩gzip
const gzip = zlib.createGzip();
const inputStream = fs.createReadStream('./index.html');
const outputStream = fs.createWriteStream('./index.html.gz');
inputStream.pipe(gzip).pipe(outputStream);
inputStream.close();
outputStream.close();
