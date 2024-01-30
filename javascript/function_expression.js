/*
function sayhi() {
  alert("hello");
}
alert(sayhi);

//Function Expression

function sayhi() {
  alert("hello");
}
let func = sayhi;
func();
sayhi();
*/

//Callback function
/*
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
function showOk() {
  alert("You agreed.");
}
function showCancel() {
  alert("you canceled the execution.");
}
ask("Do you agree?", showOk, showCancel);
*/

// Function Declaration
/*
function sum(a, b) {
  return a + b;
}
*/
// Function Expression
/*
let sum = function(a, b) {
  return a + b;
};
*/

/*
let age = prompt("What is your  age?", 18);

//conditional  declaration  a function

if (age < 18) {
  function welcome() {
    alert("Hllo");
  }
} else {
  function welcome() {
    alert("Greeting");
  }
}

welcome();
*/

/*
let age = 23;
if (age < 18) {
  function welcome() {
    alert("helloo");
  }
  welcome();
} else {
  function welcome() {
    alert("Greeting");
  }
}
welcome();
*/

/*
let age = prompt("What is your age", 18);
let welcome;
if (age < 18) {
  welcome = function () {
    alert("HeLLO");
  };
} else {
  welcome = function () {
    alert("Greeting");
  };
}

welcome();
*/

let age = prompt("What is your age?", 18);

let welcome =
  age < 18
    ? function () {
        alert("Hello!");
      }
    : function () {
        alert("Greetings!");
      };

welcome(); // ok now
