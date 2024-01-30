//Practise 2
//Problem 1 use logical opertor to find whether the age of a person lies b\w 10 aand 20
/*let age = prompt("whatv is your age?");
age = Number.parseInt(age);
if (age > 10 && age <= 20) {
  console.log("Your age lies between 10 and 20");
} else {
  console.log("Your age doesn' lies between 10 and 20");
}
*/
//problem 2 Demonstraat the use of switch case statement in javascript

/*let age = prompt("what is your age?");
                                            switch (age) {
                                              case "12":
                                                console.log("your age is 12");
                                                break;
                                                  
                                              case "13":
                                                console.log("your age is 13");
                                                break;
                                            
                                              case "14":
                                                console.log("your age is 14");
                                                break;
                                            
                                              case "15":
                                                console.log("your age is 15");
                                                break;
                                            
                                              default:
                                                console.log("your age is speacial");
                                            }*/

//Problem 3 write  javascript program to find whether  number is divisible by either 2 and 3
/*
let num = prompt("what is your age?");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Your number is divisible by 2 and 3 ");
} else {
  console.log("Your number is not divisible by 2 and 3 ");
}
*/
//Problem 4  write  javascript program to find whether  number is divisible by either 2 or 3

let num = prompt("what is your age?");
num = Number.parseInt(num);
if (num % 2 == 0) {
  console.log("Your number is divisible by 2 ");
} else if (num % 3 == 0) {
  console.log("Your number is divisible by  3 ");
} else {
  console.log("Your number is not divisible by 2 and  3 ");
}

// //problem 5 Print " you cn drive " or  "you cannot drive " basd on age being greater thaan 18 using ternary opertor
// let age = 25;
// let a = age > 18 ? "you can drive" : "you can not drive";
// console.log(a);

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

/*

let accessAllowed;
let age = prompt("How old are you", "");
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);
*/
