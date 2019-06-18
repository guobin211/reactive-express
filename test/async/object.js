// oop
function Person(name) {
  this._name = name;
  this.type = 'Person';
  this.age = 22;
  return this;
}

Person.prototype.setName = (val) => {
  this._name = val;
};
Person.prototype.getName = () => {
  return this._name;
};

class Man {
  constructor(name) {
    this._name = name;
    this.age = 22;
    this.type = 'Man';
  }

  get Name() {
    return this._name;
  }

  set Name(val) {
    if (typeof val !== 'string') {
      throw new Error('name must be string');
    }
    this._name = val;
  }
}

const jack = new Person('jack');
const tom = new Man('tom');
console.log(jack);
console.log(tom);
console.log(jack.name);
console.log(jack._name);
// es5 prototype
jack.setName('jack1');
console.log(jack.getName());
// es6 属性
console.log(tom.Name);
tom.Name = 'tom1';
console.log(tom.Name);

