const net = require('net');
/**
 * http -> udp -> tcp(传输层) -> ip(添加ip，网络层) -> packet(mac打包，数据链路层) -> byte(物理比特流)
 * ctl: 序列位置
 * ack: 应答
 * @type {Server}
 */
const server = net.createServer(socket => {
    console.log("create server");
});
server.on('close', onClose);
server.on('connection', onConnection);
server.on('error', onError);
server.on('close', onClose);

server.listen({host: 'localhost', port: 8888, exclusive: true});


function onClose(socket) {
    console.log("on closed" + socket);
}

function onConnection(socket) {
    console.log("connect" + socket);
    console.log(socket);
    // c.send("hello nodejs");
}

function onError(err) {
    console.log("on error" + err);
}
