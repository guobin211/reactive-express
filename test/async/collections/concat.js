const concat = require('async/concat');
const async = require('async');
const fs = require('fs');
const workRoot = '/Users/guobin/vscode/reactive-express/';
const dirs = [workRoot + 'src', workRoot + 'test', workRoot + 'images'];
concat(dirs, fs.readdir, (err, files) => {
  if (err) {
    console.log(err);
  } else {
    for (const file of files) {
      console.log(file);
    }
  }
});
let files = fs.readdirSync(workRoot + 'src');
const fileList = [];
for (let file of files) {
  fileList.push(workRoot + 'src/' + file);
}
const fileMap = new Map();
fileMap.set('file', []);
fileMap.set('dir', []);
async.map(fileList, fs.stat, function (err, results) {
  if (err) { console.log(err); }
  console.log(results.length);
  for (let i = 0; i < results.length; i++) {
    if (results[i].isFile()) {
      const arr = fileMap.get('file');
      arr.push(fileList[i]);
      fileMap.set('file', arr);
    }
    if (results[i].isDirectory()) {
      const arr = fileMap.get('dir');
      arr.push(fileList[i]);
      fileMap.set('dir', arr);
    }
  }
  console.log(fileMap);
});


