// create a variaable of type string and try to add a number to it
let a = "aman";
let b = 56;
let c = 22;
console.log(a + b + c);

//use type of operator to find the datatype of the string in last qustion
console.log(typeof (a + b + c)); // string
console.log(typeof a + b + c); // string5622

//create a const object in JS can you change it to hold a number later?
// const x = {
//   name: "man",
//   section: 1,
//   class: 10,
// };
// x = "aman";

// try to add  new key to the const object in problem 3 were you able to do it
const x = {
  name: "man",
  section: 1,
  class: 10,
};
//   a = "aman";
x["friend"] = "Aaman";
x["name"] = "Raju";
console.log(x);

//write a js program to create a word meaaning dictionary of 5 words
const dict = {
  appricate: "page1",
  ataraxia: "page2",
  yakka: "page3",
};
console.log(dict); //{ appricate: 'page1', ataraxia: 'page2', yakka: 'page3' }
console.log(dict.yakka); //page3
console.log(dict["yakka"]); // page3
