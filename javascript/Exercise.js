//Reverse Number

/*
function reversenumber(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
let n = prompt("n", "");
alert(Number(reversenumber(n)));
console.log(Number("reverse_a_number(n)"));



*/

//Reverse Number
/*
function reversenumber(num) {
  let reversed = 0;
  while (num != 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
const num = 654321;
console.log("Original number:" + num);
const result = reversenumber(num);
console.log("Reversed number:" + result);


*/
//
/*
let n = prompt("Enter the value", "");
if (n % 2 == 0) {
  if (n >= 2 && n <= 5) {
    console.log("not weird");
  } else if (n >= 6 && n <= 20) {
    console.log(" weird");
  } else if (n >= 20) {
    console.log("not");
  }
} else {
  console.log("wierd");
}
*/

for (let i = 0; i <= 50; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    console.log(i);
  }
}
