class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is running");
  }
  shout() {
    console.log(this.name + " is shouting");
  }
}

class Monkey extends Animal {
  eatBanana() {
    console.log("banana");
  }
  hide() {
    console.log(this.name + " is hiding");
  }
}

let ani = new Animal("annu", "blue");
let m = new Monkey("Mnnu", "red");

ani.shout();
m.eatBanana();
m.hide();
// ani.hide()
