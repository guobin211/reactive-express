/**
 * symbol
 *
 * @author GuoBin on
 */

const JSON5 = require('json5');

class MyArray {

  constructor() {
    this._data = [];
    this._size = 0;
  }

  add(n) {
    this._data.push(n);
    this._size++;
  }

  get size() {
    return this._size;
  }
  // 迭代器运算
  *[Symbol.iterator]() {
    for (let i = 0; i < this._size; i++) {
      yield this._data[i];
    }
  }

  forEach(controlFn) {
    for (let i = 0; i < this._size; i++) {
      this._data[i] = controlFn(this._data[i]);
    }
  }
}

const arr = new MyArray();
arr.add(1);

console.log(arr.size);
for (let i = 0; i < 10; i++) {
  arr.add(i);
}

const res = [...arr];
console.log(res);

arr.forEach(el => 'id' + el);

console.log(arr._data);

console.log(JSON5.stringify(arr));
