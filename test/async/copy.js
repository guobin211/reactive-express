const emptyObject = Object.create(null);
console.log(emptyObject);
const jack = {
  name: 'jack',
  age: 22
};
let tom = {
  name: 'tom'
};
Object.assign(tom, jack);
console.log(tom);
const arr = [1, 2, 3, 4, 5];
const max = Math.max.apply(null, arr);
console.log(max);

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  // 类似super
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5));