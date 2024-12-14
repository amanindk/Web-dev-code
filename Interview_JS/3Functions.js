// Functions in javascript
//Q1: Whaat is Function declaration -----------------------------------------------------------------

// function add(num) {
//   return num + num;
// }

//Q1: Whaat is Function Expression -----------------------------------------------------------------------

// const add = function (num) {
//   return num + num;
// };
// console.log(add(2));

//Que3: What are First class function ------------------------------------------------------------------------
//A programming language is said to have First-class functions if functions in that language are treated
//like other variables. So the functions can be assigned to any other variable or passed as an argument
//or can be returned by another function. JavaScript treats function as a first-class citizen.
//This means that functions are simply a value and are just another type of object.

function add(num) {
  return num + num;
}

function addDisplay(fn) {
  console.log("Square is " + fn(5));
}

addDisplay(add);

//Que4: whaat is IIFE (Immediately Invoked Function Expression) ----------------------------------------------
//which is a JavaScript programming language construct that executes a function immediately after it's defined:
// Definition: An IIFE is a function that runs as soon as it's called in the JavaScript event loop.

(function (x) {
  return (function (y) {
    console.log(x); //6
  })(5);
})(4);

// That is IIFE

// Que5:IIFE - O/P Based Question-----------------------------------------------------------------------------

// Lexical Scope
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// Closure -----------------------------------------------------------------------------------------------
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Que6:Function Scope  ----------------------------------------------------------------------------------

var num1 = 2;
num2 = 3;
name = "Aman codder";

function multiple() {
  return num1 * num2;
}
console.log(multiple());

// A nested function example
function getscore() {
  var num1 = 2;
  num2 = 3;

  function add() {
    return name + " scored " + (num1 + num2);
  }
  return add();
}

console.log(getscore());

// Que7:Function Scope - O/P Based Ques/ Ans -----------------------------------------------------------------

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

//using Let result  10
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9

//using var result  10 because var is global scope
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10

// Que8: Function Hoisting --------------------------------------------------------------------------------------

var x = 67;
Hoist();
function Hoist() {
  console.log(x); //undefined
  console.log("Amaan Codder");
}

// Que9: Function Hoisting - O/P Que/Ans ------------------------------------------------------------------------

var x = 21;
var fun = function () {
  console.log(x);
  // var x = 20;
};

fun();

// Que10:Parama vs Arguments ---------------------------------------------------------------------------------

function ad(num1, num2) {
  //paramas
  return num1 + num2;
}

ad(4, 3); // argu

// Spread aand rest Opeator
function multiply(...nums) {
  // that is rest operator
  // console.log(nums);
  console.log(nums[0] * nums[1]);
}

var arr = [5, 6];
multiply(...arr); // that is spread operator

// Que11: Parama vs Arguments - O/P Que/Ans

function fb(a, x, y, ...number) {
  console.log(x, y, a, number); //4 5 2 [ 6, 8, 9, 7 ]
}

fb(2, 4, 5, 6, 8, 9, 7);

// what is callbacck Function
// A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.
