//Callback function
/*
function display(result) {
  console.log(result);
}

function add(num1, num2, Callback) {
  let sum = num1 + num2;
  Callback(sum);
}
add(3, 4, display);
*/

// Anonymous function
/*
example-1
let sum = function (x, y) {
  return x + y;
};
console.log(sum(2, 4)); //6

//example 2
(function () {
  console.log("heello bhaii");
})();

//example 3
setTimeout(function () {
  console.log("My work in dialkro");
}, 3000);
*/

// Recursive Function
/*
function countdown(num) {
  console.log(num);
  num--;
  if ((num) => 0) {
    countdown(num);
  }
}
countdown(10);
*/
//callback function
/*
const funA = () => {};
setTimeout(function () {
  console.log("Hi Friend");
}, 5000);

const funB = () => {
  console.log("hnji");
};

funA();
funB();
*/

const person1 = (friend, callback) => {
  console.log(`Hello ${friend} kaise ho bhai`);
  callback();
};

const person2 = () => {
  console.log("badiaa badiaa");
};

person1("Ankit", person2);
