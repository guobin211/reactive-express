/**
 * proto
 * @author guobin201314@gmail.com on 2019-05-25
 */

function Func1() {
  this.name = 'f';
  this.type = 'function';
  this.age = 22;
  // Function => Object
  this.prototype = Object.prototype;
}

let f = new Func1();

const obj = {
  name: 'jack',
  age: 12
}

console.log(f);
// false
console.log(f.isPrototypeOf(Object));

console.log(f.__proto__.__proto__);
// node error
f.prototype.weight = 111;

// undefined
console.log(f.prototype);

obj.school = 'wuhan';
console.log(obj);

let obj2 = Object.create(obj);
let obj3 = Object.create(null);

obj2.rate = 80;
obj3.rate = 90;

console.log(obj2);
console.log(obj3);
