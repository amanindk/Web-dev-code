// function
/*
function greet1() {
  console.log("hello world");
}
greet1();
*/
// Arrow function
/*
const greet = (count) => {
  for (let i = 0; i < count; i++) console.log("hello bhai");
};
greet(5);

const square = (num) => {
  return num * num;
};
console.log(square(3));
*/

// synchrounous Programming
/*
let a = prompt("Enter Your name");
let b = prompt("Enter Your age");
let c = prompt("Enter Your favourite");
let d = prompt("Enter Your Number");
console.log(a + "is" + "year old and has" + c + "favourite color");
*/

// Asynchrounous Programming
/*
console.log("Start");
setTimeout(function () {
  console.log("HELLO BHAU");
}, 2000);
console.log("End");
*/

/*
callback function
const calculate = (a, b, operation) => {
  return operation(a, b);
};

Method 1
const addition = calculate(3, 4, function (num1, num2) {
  return num1 + num2;
});
console.log(addition);

Method 2
const addition = (a, b) => a + b;
const add = calculate(7, 4, addition);
console.log(add);

Method3
function addition(a, b) {
  return a * b;
  const add = calculate(4, 5, addition);
  console.log(add);
}
*/

// subtraction
/*
const subtraction = (a, b) => a - b;
const subresult = calculate(7, 2, subtraction);
console.log(subresult);
*/

// Method3
/*
function multiply(a, b) {
  return a * b;
}
const resmultiply = calculate(2, 6, multiply);
console.log(resmultiply);
*/

// array calllback function
/*
const a = [1, 3, 5, -3, -7, 23, 565, 9, -33, -6];

const firstneg = (num) => {
  return num < 0;
};
// const result = a.find(firstneg);  //-3
const result = a.findIndex(firstneg); //3
console.log(result);
*/

// callbak function
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("src:" + src);
    callback(null, src);
  };
  script.onerror = function () {
    console.log("Error loading script with src:" + src);
    callback(new Error("src got some error"));
  };
  document.body.appendChild(script);
}
function hello(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("hello world" + src);
}
function good(src) {
  alert("hello world" + src);
}
loadScript(
  "https://cdn.jsdeliv.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
  hello
);
