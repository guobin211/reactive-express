/**
 * macro-task 宏任务 script setTimeout setInterval setImmediate requestAnimation I/O UI渲染
 * micro-task 微任务 Promise.then Promise.nextTick(node) Object.observe MutationObserver
 * @author guobin201314@gmail.com on 2019-05-25
 */

// nodejs 环境 有4个宏任务队列, 2个微任务为队列
// browesr 环境 有1个宏任务队列, 1个微任务队列
// console.log 排序 （ 区分环境 ）
setTimeout(() => {
  console.log(1);
}, 1000);
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
});
Promise.resolve(() => {
  console.log(4);
});
const pro = new Promise((resolve, reject) => {
  console.log(5);
  setTimeout(() => {
    console.log(6);
    resolve();
    console.log(7);
  }, 1000);
});
pro.then(() => {
  console.log(8);
});
console.log(9);
setImmediate(() => {
  console.log(10);
  setTimeout(() => {
    console.log(11);
  }, 2000);
});
process.nextTick(() => {
  console.log(12);
});
console.log(13);
