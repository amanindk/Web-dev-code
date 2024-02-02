//Following two lines will run succssfully due to javascipt hoisting
let a;
console.log(a);
gethost();
// const host = function () {
//   //function express and class eexprress are not hoisted
//var and const nhi lagega function me hoisting karte waakt
//   console.log("Hosting");
// };
function gethost() {
  console.log("Hosting");
}
// let a = 9; //Declaration hoisted to the top but initializationi not
//let or const se hosting ni hoti var se ho jati ha
console.log(a);
