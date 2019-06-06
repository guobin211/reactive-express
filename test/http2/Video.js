/**
 * Video
 * @author guobin201314@gmail.com on 2019-06-06
 */
const fs = require('fs');

module.exports = class Video {
  constructor(io) {
    this.videoMap = new Map();
    this.videoSize = 0;
    this.path = '/Users/guobin/vscode/reactive-express/file/';
    this.io = io;
  }

  readFileList(task, path) {
    if (this.videoMap.has(task)) {
      const arr = this.videoMap.get(task);
      this.videoMap.set(task, arr.concat(fs.readdirSync(path)));
    } else {
      this.videoMap.set(task, fs.readdirSync(path));
    }
    this.readImageBase();
  }

  removeFile(task) {
    this.videoMap.delete(task);
  }

  readImageBase() {
    while (true) {
      if (this.videoMap.size > 0) {
        for (const [key, value] of this.videoMap.entries()) {
          console.log('send key: ' + key);
          for (let i = 0; i < value.length; i++) {
            const path = this.path + value[i];
            const buff = fs.readFileSync(path);
            console.log(buff);
            // this.io.emit('video', {path, buff})
          }
        }
      } else {
        console.log('无数据');
      }
    }
  }
}

