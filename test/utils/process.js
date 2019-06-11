/**
 * process
 * @author guobin201314@gmail.com on 2019-06-08
 */

console.log('当前进程id：' + process.pid);
console.log('当前工作目录：' + process.pwd);
// 全局异常处理
process.on('uncaughtException', function (data) {
  console.log('未补获的异常：' + data)
});
process.stdout.write('hello nodejs', function () {
  console.warn('stdout over!')
});
process.stdin.on('data', function (data) {
  console.log(data.toString());
});
// 添加arg参数
process.argv.forEach((val, index, array) => {
  console.log('index: ' + index + '; value: ' + val)
});
process.on('exit', function () {
  console.log('node 退出前执行！')
});
console.log(a);
