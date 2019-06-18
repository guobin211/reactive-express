console.log(Math.PI);
// object
console.log(Math.__proto__);
// number
console.log(Math.PI.__proto__);
// object
console.log(Math.PI.__proto__.__proto__);
// null
console.log(Math.PI.__proto__.__proto__.__proto__);
console.log(Object.keys(Math.__proto__));