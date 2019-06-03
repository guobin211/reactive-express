
const Person = (function () {
  let wp = new WeakMap();
  class Person{
    constructor(name) {
      wp.set(this, {name})
    }

    set name(name) {
      wp.get(this).name = name;
    }

    get name() {
      return wp.get(this).name;
    }
  }
  return Person;
})();


jack = new Person('jack');

console.log(jack.name)

jack.name = 'tom';

console.log(jack.name)

jack.age = 11;

console.log(jack.age);
