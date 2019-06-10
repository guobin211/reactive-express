const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', function (msg, info) {
  console.log(msg.toString());
  console.log(info);
});

socket.bind(12121, 'localhost');
