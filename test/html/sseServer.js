const net = require('net');

const server = net.createServer((socket) => {
  console.log(socket);
});

server.on('error', (error) => {
  console.log(error);
});

server.listen(6666, () => {

});
