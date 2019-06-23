/**
 * json5
 *
 * @author GuoBin on
 */
const JSON5 = require('json5');

const person = {
  name: "jack",
  age: 22
};

const text = `{"name":"jack","age":22}`;

const str5 = JSON5.stringify(person);
const str = JSON.stringify(person);

console.log(str5);
console.log(str);

const json5 = JSON5.parse(text);
const jsonPerson = JSON.parse(text);

console.log(json5.name);
console.log(jsonPerson.name);

