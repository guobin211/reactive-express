// web-socket
const fs = require('fs');
const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 12011,
  perMessageDeflate: {
    zlibDeflateOptions: {
      chunkSize: 2048,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true,
    serverMaxWindowBits: 10, // Defaults to negotiated value.
    // Below options specified as default values.
    concurrencyLimit: 10, // Limits zlib concurrency for perf.
    threshold: 1024 // Size (in bytes) below which messages
  }
});

let index = 0;
setInterval(() => {
  index++;
}, 1000);
wss.on('connection', (ws) => {

  // console.log(ws);

  ws.on('message', (msg) => {
    console.log(msg);
  });

  ws.send('hello');

  setInterval(() => {
    ws.send(index);
  }, 2000);
});

console.log('ws://127.0.0.1:12011');
