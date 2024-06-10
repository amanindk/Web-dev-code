var number = prompt("Enter the number");
var fact = 1;
function factr(n) {
  if (n > number) {
    return;
  }
  var tmp = fact;
  fact = fact * n;
  //   console.log(tmp + " X " + n + " = " + fact);
  n++;
  factr(n);
}
factr(1);
console.log(`The fact of ${number} is ${fact}`);
