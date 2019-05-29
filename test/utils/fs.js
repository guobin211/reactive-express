const fs = require('fs');

async function readJson() {
  const res = fs.readFileSync('data.json', 'utf-8');
  console.log(res);
  return res;
}


async function api() {
  const res = await readJson();
  const data = JSON.parse(res);
  console.log(data);
  const add = {
    num: data.num,
    num1: data.num+1
  }
  fs.open('data.json', 'wx', (err, fd) => {
    if (err.code === 'EEXIST') {
      console.log(err);
    } else {
    }
  })
}

setTimeout(() => {
  api();
}, 500)
setTimeout(() => {
  api();
},500)
