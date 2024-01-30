class Animal {
  constructor(name) {
    this.name = name;
  }
  fly() {
    console.log("I am flying ");
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }
}

class Bird extends Animal {
  eatBanana() {
    console.log("Eating banana");
  }
}

let a = new Bird("Aman");
a.fly();
console.log(a.name);
a.name = "Rahul";
console.log(a.name);

let c = 23;

console.log(a instanceof Bird);
console.log(c instanceof Animal);
console.log(a instanceof Animal);
