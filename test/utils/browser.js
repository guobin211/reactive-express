const query = 'https://mozilla.org/?name=jack&age=18';
const uri = 'https://mozilla.org/?x=шеллы';

console.log(encodeURI(uri));
console.log(decodeURI(encodeURI(uri)));
console.log(decodeURI(query));

const date = new Date();
console.log(date);
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

console.log(`星期${date.getDay()}`);

const day = new Date('2019-06-12');
console.log(day);
console.log(day.toDateString());
