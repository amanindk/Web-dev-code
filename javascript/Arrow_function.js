//let sum = (a, b) => a + b;
// This arrow function is a shorter form of:
/*

let sum = function (a, b) {
  return a + b;
};

alert(sum(1, 2));
 */

/*
let double = (n) => n * 2;
alert(double(5));
*/

/*
//let double = function(n) { return n * 2 }
let double = (n) => n * 2;
alert(double(4));  //8 

let sayhi = () => alert("hello");
sayhi();   // Hello
*/

/*
let age = prompt("what is your age", 15);
let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greeting");
welcome();
*/

//Multiline arrow  Function
/*
let sum = (a, b) => {
  let result = a + b;
  return result;
};
alert(sum(2, 3));
*/
/*
let group = {
  title: "Our Group",
  students: ["X", "Y", "Z"],

  showList() {
    this.students.forEach((student) => alert(this.title + ":" + student));
  },
};
group.showList();

*/
//write  a program replace  function expression to Arrow function

/*
function ask(qustion, yes, no) {
  if (confirm(qustion)) yes();
  else no();
}
ask(
  "Do you agree",
  function () {
    alert("you agreed.");
  },
  function () {
    alert("u canceled the execution.");
  }
);

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Do you agree",
  () => alert("you agreed."), 
  () => alert(" canceled the execution.")
);
*/
/*
let welcome = (name, age) => {
  return `Hello & welcome ${name}-${age}`;
};
console.log(welcome("Amn", 23)); //Hello & welcome amn- 23
*/

/*
let welcome = (name, age) => `Hello & welcome ${name}-${age}`;
console.log(welcome("Amn", 23)); //Hello & welcome amn- 23
console.log(typeof welcome); // function
*/

/*
let obj = {
  names: ["Aman", "deep", "singh", "Lavy"],
  speak() {
    this.names.forEach((student) => {
      console.log("heello" + student);
    });
  },
};
obj.speak();
*/

/*
const sayhello = () => {
  console.log("hello");
};

sayhello();
*/

//without bracket
/*
const sayhello = () => console.log("hello");

sayhello();
*/

/*
const sayhello = (name, Greeting) => console.log(Greeting + "hello " + name);

sayhello(" Aman", "Goodmorning ");
*/

// Arrow function and this
const x = {
  name: "Aman",
  role: "FullstacK",
  company: "Google",
  show: function () {
    // let that = this;
    // console.log(this);
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`);
    }, 2000);
  },
};
// console.log(x.name, x.role, x.company);
x.show();
