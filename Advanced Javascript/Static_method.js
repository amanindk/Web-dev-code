class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);  //3
  }
  walk() {
    // console.log("Animal " + Animal.capitalize(this.name) + " is walking");  //1
    console.log("Animal " + this.name + " is walking");  //2
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

// a = new Animal("aman");  //1
// a = new Animal(Animal.capitalize("aman"));  2
a = new Animal("aman");  //3
a.walk();
