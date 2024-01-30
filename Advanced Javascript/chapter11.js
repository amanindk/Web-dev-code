//Problem 1. create a javascript class to create a complex number. Create a constructer to set the real and the complex

// class Complex {
//   constructor(real, imaginary) {
//     this.real = real;
//     this.imaginary = imaginary;
//   }
//   //problem 2.Write a method to add two complex number in above class
//   add(num) {
//     this.real = this.real + num.real;
//     this.imaginary = this.imaginary + num.imaginary;
//   }
// }

// let a = new Complex(3, 5);
// let b = new Complex(4, 8);
// a.add(b);
// console.log(`${a.real} + i ${a.imaginary}`);


//Probleem 3. Create a class student from a class Human . Override  method && ssee changes
class Human {
  constructor(name, food) {
    this.name = name;
    this.food = food;
  }
  walk() {
    console.log(`${this.name} human is walking`);
  }
}

class Student extends Human {
  walk() {
    console.log(`${this.name} student is walking`);
  }
}

let o = new Student("Deep", "allo");
o.walk();

//Problem 4.See if student is an instance of humn using instanceof keyword
console.log(o instanceof Human);

//Problem 5. use getters and setters to set and get the  real and imaginary parts of the complex number

class Complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  add(num) {
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }
  get real() {
    return this._real;
  }
  get imaginary() {
    return this._imaginary;
  }
  set imaginary(newImaginary) {
    this._imaginary = newImaginary;
  }
  set real(newReal) {
    this._real = newReal;
  }
}

let a = new Complex(3, 5);
console.log(a.real,a.imaginary);
a.real = 10;
a.imaginary = 10;
let b = new Complex(4, 8);
a.add(b);
console.log(`${a.real} + i ${a.imaginary}`);
