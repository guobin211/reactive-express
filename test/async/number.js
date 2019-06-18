const num = 12.3;
console.log(num);
// Number
console.log(num.__proto__);
// Object
console.log(num.__proto__.__proto__);
// null
console.log(num.__proto__.__proto__.__proto__);
// undefined
console.log(num.prototype);

const res = Number('12.7');
console.log(res + num);
// false
console.log(Number.isInteger(num));
// false
console.log(Number.isNaN('12.7'));
console.log(parseFloat('12.7'));
console.log(parseInt('12.7', 10));
console.log(Math.PI.toFixed(8));