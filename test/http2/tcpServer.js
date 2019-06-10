const net = require('net');
const util = require('util');
/**
 * tcp 双工通讯
 * @type {Server}
 */
const server = net.createServer({
  allowHalfOpen: false
}, function (socket) {
  console.log(util.inspect(socket.address()));

  socket.on('error', function (err) {
    console.log(err);
  })
});

server.on('error', function (err) {
  console.log(err);
});

server.listen(8111, 'localhost', 511, function () {
  console.log(util.inspect(server.address()));
});
