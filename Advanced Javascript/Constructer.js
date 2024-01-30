/*
function person(firstname, lastName) {
  this.firstname = firstname;
  this.lastName = lastName;
  this.getfullName = function () { // constructor
    console.log(this.firstname + ":" + this.lastName);
  };
}
let person1 = new person("Aman", "Deep");
console.log(person1);
person1.getfullName();
*/

/*
function user(name) {
  this.name = name;
  this.isAdmin = false;
}

user = new user("aman");
console.log(user.name);
console.log(user.isAdmin);
*/
  
/*
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

/*
function Calculator() {
  let values = {};
  this.read = function () {
    values.a = +prompt("Enter value of a : ");
    values.b = +prompt("Enter value of b : ");
  };
  this.sum = function () {
    return values.a + values.b;
  };
  this.mul = function () {
    return values.a * values.b;
  };
  this.divide = function () {
    return values.a / values.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
*/

/*
alert(0 == -0);
alert(0.2 + 0.3);
function randomInteger(min, max) {
  // now rand is from  (min-0.5) to (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

alert(randomInteger(1, 3));
 */

//Return from constructors
/*
function Biguser() {
  this.name = "AMAN";
  return { name: "deep" };
}
alert(new Biguser().name); //deep

function smalluser() {
  this.name = "AMAN";
  return;
}
alert(new smalluser().name); //aman
*/

// /*

function user(name) {
  this.name = name;
  this.sayHi = function () {
    console.log("My name is" + this.name);
  };
}
let aman = new user("aman");
aman.sayHi();

// */

/*
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}
console.log(new A() == new B()); //true
*/

/*
//Create a constructor function Accumulator(startingValue)
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("how much to add", 0);
  };
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);
*/

/*
class user {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encriptpassword() {
    return `${this.password}abc`;
  }
  changeusername() {
    return `${this.username.toUpperCase()}`;
  }

}

const aman = new user("aman", "aman@123", 123);
console.log(aman.encriptpassword());
console.log(aman.changeusername());
*/

/*
// behind the scene
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
user.prototype.encriptpassword = function () {
  return `${this.password}abc`;
};
user.prototype.changeusername = function () {
  return `${this.username.toUpperCase}123`;
};
const deep = new user("deep", "deep123", 123);
console.log(deep.encriptpassword());
console.log(deep.changeusername());
*/

/*
//Railwayform Constructorr
class Railwayform {
  constructor(givenname, trainno, address) {
    console.log("Contructor start..." + givenname + "  " + trainno);
    this.name = givenname;
    this.number = trainno;
    this.address = address;
  }

  preview() {
    alert(
      this.name +
        "  Your Form is for train number " +
        this.number +
        " and your address " +
        this.address
    );
  }
  Submit() {
    alert(this.name + "  Your Form is  Submit for train number" + this.number);
  }
  cancel() {
    alert(this.name + "  form is cancelld  for train number" + this.number);
  }
}
//create & fill the form Aman
let amanform = new Railwayform("Amandeep", 222222, "Mohali");

//create & fill the form Aman
let rohanform = new Railwayform("Rohan", 333333);
let rohanform1 = new Railwayform("Rohan", 444444);

amanform.preview();
amanform.Submit();
// rohanform.Submit();
// rohanform1.Submit();
amanform.cancel();
amanform.preview();
*/
