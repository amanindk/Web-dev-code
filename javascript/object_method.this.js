/*
let person = {
  firstname: "Aman",
  lastName: "Singh",
};
// console.log(person["firstname"]);
// console.log("height" in person); //false
// console.log("firstname" in person); //true

person.age = 11;
for (let key in person) {
  console.log(key); //all key acesss
  console.log(key + ":" + person[key]);
}
*/

/*
let person = {
  firstname: "Aman",
  lastName: "Singh",
};
// person.sayhello = function () {
//   //anonymous function
//   console.log("hello");
// };
function great() {
  console.log("hello");
}
person.sayhello();
*/
/*
let person = {
  firstname: "Aman",
  lastName: "Singh",
  sayhello: function () {
    console.log("hello");
  },
};
person.sayhello();

*/

//after ES6
/*
let person = {
  firstname: "Aman",
  lastName: "Singh",
  sayhello() {
    console.log("hello");
  },
};
person.sayhello();
*/

//this keyword

// "use strict";
// console.log(this); //global object
/*
function sum() {
  var add = 2 + 2;
  console.log("sum of two no. is " + add);
  console.log(this);
}

sum();
*/
/*
const JS = {
  name: "aman",
  lastname: "Simgh",
  sum: function () {
    var add = 3 + 5;
    console.log("sum of two no. is " + add);
    console.log(this);
    console.log(this.name);
  },
};
JS.sum();
*/

/*
let obj = {
  name: "rani",
  fullname: "raja rani",
  getfullName() {
    console.log(this);
    console.log(this.name + ":" + this.fullname);
  },
  address: {
    street: "VPO Jansla, Rajpra",
    state: "Punjab",
    getaddress() {
      console.log(this.street + ":" + this.state);
      console.log(this.name);
    },
  },
};
obj.getfullName();
obj.address.getaddress();
*/
//using construtor function

/*
let user = {};
function sayHi() {
  alert("hello");
}

user.sayHi = sayHi;
user.sayHi(); //hello
*/

/*
//that is both same
user = {
  sayHi: function () {
    console.log("hello");
  },
};

user = {
  sayHi() {
    console.log("hello");
  },
};
*/

/*
//this method
let user = {
  name: "Aman",
  age: 30,
  sayHi() {
    console.log("hello");
  },
};
user.sayHi();
*/

/*
let user = {
  name: "John",
  age: 30,

  sayHi() {
    console.log(user.name); // "user" instead of "this"
  },
};
// user.sayHi();\
let admin = user;
user = null;
admin.sayHi();
*/

//Arrow function have no this
let user = {
  name: "amn",
  sayHi() {
    let Arrow = () => console.log(this.name);
    Arrow();
  },
};

user.sayHi(); //amn

/*
//Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  sum() {
    return this.a + this.b;
  },
  Mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.Mul());
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
