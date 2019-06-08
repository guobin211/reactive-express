/**
 * nexttick 轮循 进程微任务
 * @author guobin201314@gmail.com on 2019-06-08
 */

console.log(1);

process.nextTick(() => {
  console.log(3);
})

setTimeout(() => {
  console.log(4);
})

console.log(2);
