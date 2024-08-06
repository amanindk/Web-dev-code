let number = prompt("Enter the number");
let fact = 1;
// document.write(fact);
function factorial(n) {
  if (n > number) {
    return;
  }
  var temp = fact;
  fact = fact * n;

  n++;
  factorial(n);
}
factorial(1);
document.write(`The Factorial of ${number} is ${fact}`);
