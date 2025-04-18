let number = prompt("Enter a number");
let fact = 1;

function factor(n) {
  if (n > number) {
    return;
  }
  var temp = fact;
  fact = fact * n;
  n++;
  factor(n);
}
factor(1);
console.log("temp" + " x " + n + " = " + fact);

// let number = prompt("Enter the number");
// let fact = 1;
// // document.write(fact);
// function factorial(n) {
//   if (n > number) {
//     return;
//   }
//   var temp = fact;
//   fact = fact * n;

//   n++;
//   factorial(n);
// }
// factorial(1);
// document.write(`The Factorial of ${number} is ${fact}`);
