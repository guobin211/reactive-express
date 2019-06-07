/**
 * promisefy
 * Author GuoBin201314@gmail.com on 14:46
 */

function fn1(a) {
  return new Promise((resolve, reject) => {
    console.log('promise');
    if (a > 1) {
      resolve(a)
    } else {
      resolve(0)
    }
  })
}

fn1(2).then(res => console.log(res)).catch(err => console.log(err));

class Promisefy {
  resolve() {
    this.state = 'RESOLVED';
    let args = Array.prototype.slice.call(arguments);
    setTimeout(() => {
      this.doneList.forEach((item, key, arr) => {
        item.apply(null, args);
        arr.shift()
      })
    }, 200)
  };
  reject() {
    this.state = 'REJECTED';
    let args = Array.prototype.slice.call(arguments);
    setTimeout(() => {
      this.failList.forEach((item, key, arr) => {
        item.apply(null, args);
        arr.shift()
      })
    }, 200);
  };
  constructor(fn) {
    this.state= 'PENDING';
    this.doneList = [];
    this.failList = [];
    fn(this.resolve.bind(this), this.reject.bind(this));
  }
  done(handle) {
    if (typeof handle === 'function') {
      this.doneList.push(handle);
    } else {
      throw new Error('缺少回调函数')
    }
    return this;
  }
  fail(handle) {
    if (typeof handle === 'function') {
      this.failList.push(handle);
    } else {
      throw new Error('缺少回调函数');
    }
    return this;
  }
  then(success, fail) {
    this.done(success).fail(fail);
    return this;
  }
}

const fn2 = function (a) {
  return new Promisefy((resolve, reject) =>{
    console.log(a);
    if (a>1) {
      resolve(a)
    } else {
      reject(0)
    }
  })
};

fn2(1)
    .done(res => console.log(res))
    .fail(res => console.log(res));


