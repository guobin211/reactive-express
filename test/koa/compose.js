/**
 * compose
 * Author GuoBin201314@gmail.com on 11:23
 */

const middlewares = [add, double];

let len = middlewares.length;

const fn = compose(middlewares);

const res = fn(1,2);
console.log(res);

/**
 * 压缩函数
 * @param midds
 * @returns {function(...[*]): *}
 */
function compose(midds) {
  return (...args) => {
    let res = midds[0](...args);
    for (let i = 1; i < len; i++) {
      res = midds[i](res);
    }
    return res;
  };
}

function add(x, y) {
  return x + y;
}

function double(x) {
  return x * 2;
}
