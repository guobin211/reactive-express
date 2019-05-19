/**
 * event
 * Author GuoBin201314@gmail.com on 15:33
 */
let socket = {};
window.onload = function () {
  init();
};

function init() {
  socket = window.io('http://localhost:12310');
}
