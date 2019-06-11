const fs = require('fs');
console.log(Object.keys(fs));

async function api() {
  // 同步读取
  const res = fs.readFileSync('data.json', 'utf-8');
  const data = JSON.parse(res);
  const add = {
    num: data.num + 1
  };
  // 异步写入
  const over = await fs.writeFileSync('data.json', JSON.stringify(add));
  // undefined
  console.log(over);
  // ok
  console.log('ok');
  return 0;
}

setTimeout(() => {
  console.log(1);
  api().then(n => console.log(n));
  console.log(2);
}, 500);
setTimeout(() => {
  console.log(3);
  api();
  console.log(4);
}, 500);
// for (let i = 0; i <100 ; i++) {
//   api();
// }
