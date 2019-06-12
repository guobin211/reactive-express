/**
 * event
 * Author GuoBin201314@gmail.com on 15:33
 */
const sse = new EventSource("http://127.0.0.1:6666", {
  withCredentials: true
});

if (sse.readyState === 0) {
  console.log("sse 断线重连");
} else if (sse.readyState === 1) {
  console.log("sse 已经连接上");
} else if (sse.readyState === 2) {
  console.log("sse 断线不重连");
}

console.log(sse);

sse.onmessage = function (ev) {
  console.log(ev.data, ev);
};
