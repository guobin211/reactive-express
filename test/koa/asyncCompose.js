/**
 * asyncCompose
 * Author GuoBin201314@gmail.com on 11:38
 */

const middlewares = [fun1, fun2, fun3];
const finalFn = asyncCompose(middlewares);

const res = finalFn();
console.log('res:' + res);

/**
 * 实现洋葱模型
 * @param midds
 * @returns {Function}
 */
function asyncCompose(midds) {
  return function () {
    return dispath(0);
    // 递归调用
    function dispath(i) {
      let fn = midds[i];
      if (!fn) {
        return Promise.resolve();
      } else {
        return Promise.resolve( fn(function next() {
          return dispath(i + 1);
        }));
      }
    }
  };
}

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time ? time : 2000);
  });
}

async function fun1(next) {
  console.log('fn1');
  await next();
  console.log('fn1 end');
}

async function fun2(next) {
  console.log('fn2');
  await next();
  console.log('fn2 end');
}

function fun3() {
  console.log('fn3');
}

