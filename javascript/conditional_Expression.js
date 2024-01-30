//Conditional Expression
//if else statement

/*
let b = prompt("Hey whats your age?");
b = Number.parseInt(b);
console.log(typeof b);
if (b > 2) {
  alert("This is a valid age");
} else {
  alert("This is a unvalid age");
}
*/

/*
let a = prompt("Hey whats your age?");
a = Number.parseInt(a); //converting the string to no.
console.log(typeof a);
if (a > 12 && a < 18) {
  alert("This is a valid age");
} else {
  alert("this is a unvalid age");
}

if (a < 0) {
  alert("this is a invalid age");
} else if (a < 9) {
  alert("you are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
  alert("you are a kid and you can think even think of driving after 18");
} else {
  alert("you can now drive as you are above 18 ");
}
console.log("done");

// //trainary expression opertor
console.log("you can", a < 18 ? "not drive" : "drive  ");
*/

// let year = prompt(
//   "In which year was the ECMAScript-2015 specification published?"
// );
// if (year < 2015) {
//   alert("To early");
// } else if (year > 2015) {
//   alert("To late");
// } else {
//   alert("Exactly");
// }

// let accessAllowed;
// let age = prompt("How old are you", "");
// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);

//trainary opertor
// let accessAllowed = age > 18 ? true : false;

// const age = 45;
// const vari = 65;
// if (age == 20) {
//   console.log("age is 20");
// } else if (age == 34) {
//   console.log("age is 34");
// } else {
//   console.log("age is not valid");
// }
// if (typeof vari !== "undefined") {
//   console.log("vari is defined");
// } else {
//   console.log("vari is not defined");
// }
/*
const doesdrive = false;
if (doesdrive) {
  console.log("you can drive");
} else {
  console.log("you can not drive");
}

console.log(age == 45 ? "Age is 45" : "age is not 45");
*/
//Switch statement
const age = 18;

switch (age) {
  case 18:
    console.log("you are 18");
    break;
  case 28:
    console.log("you are 28");
    break;
  case 38:
    console.log("you are 38");
    break;
  case 48:
    console.log("you are 48");
    break;

  default:
    console.log("you are unknown age");

    break;
}

const exe = "Papayas";
switch (exe) {
  case "orange":
    console.log("Oranges are $0.59 a pound");
    break;
  case "Papayas":
  case "Mango":
    console.log("Mangoes and papayas are $2.79 a pound");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
    break;
}

// //Non Traditional use of "?"
// let company = prompt("Which company created JavaScript?', ''");
// "company == Netscape" ? alert("Right") : alert("wrong");
