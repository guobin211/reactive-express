/**
 * socket
 * @author guobin201314@gmail.com on 2019-06-06
 */

const server = require('http').createServer();
const io = require('socket.io')(server);
const debug = require('debug');
const fs = require('fs');

debug('socket:server');

const dir = '/Users/guobin/vscode/reactive-express/file/';
const arr = fs.readdirSync(dir);
let tempFile, buff;

io.on('connection', client => {
  client.on('event', data => {
    console.log(data)
  });
  client.on('disconnect', () => {
    console.log('断开链接')
  });
  // 发送事件消息
  client.emit('welcome', {hello: 'io'});

  setInterval(() => {
    for (let i = 0; i < arr.length; i++) {
      tempFile = dir + arr[i];
      buff = fs.readFileSync(tempFile);
      sleep(100);
      client.emit('video', buff);
    }
  }, 1000)
})

function sleep(delay) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < delay) {}
}

server.listen(9000, () => {
  console.log('http://127.0.0.1:9000')
});
