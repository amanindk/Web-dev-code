/*
for (let i = 0; i < 50; i++) {
  document.write(i);
  console.log(i);
  // alert(i);
}

*/
// for loop
/*
let sum = 0;
let n = prompt("Enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  console.log(i + 1, "+"); //if using "var" print the prompt value
}
console.log("Sum of first " + n + " natural number is " + sum);
*/
// console.log(i);
/*
//for in loop
let obj = {
  aman: 23,
  harry: 29,
  shubam: 56,
  rani: 45,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}
// for of loop
for (let a of "aman") {
  console.log("Marks of " + a + " are " + obj[a]);
  // console.log(a);
}
*/
//while loop
/*
let n = prompt("Enter the value");
n = Number.parseInt(n);
let i = 0;
while (i < n) {
  console.log(i);
  i++;
}
*/
//do while loop
/*
let n = prompt("Enter the value");
n = Number.parseInt(n);
let i = 0;
do {
  console.log(i);
  i++;
} while (i < n);

*/
// for of loop
/*
for (let i = 2; i < 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}
*/
/*let i = 2;

while (i <= 10);
{
  if (i % 2 == 0) {
    alert(i);
  }
  i++;
}
*/
/*let i = 2;
do {
  if (i % 2 == 0) alert(i);
  i++;
} while (i < 10);

*/

/*
let a = +prompt("a?", "");
switch (a) {
  case 1:
    alert("one");
    break;

  case 2:
    alert("two");
    break;

  case 3:
  case 4:
    alert("three or fourth");
    break;
}
*/
// For Loop

/*
// program to add first n natural Number
let sum = 0;
let n = prompt("Enter the value of Number");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
  sum += i + 1;
  console.log(i + 1, "+");
}
console.log(" sum of first " + n + " natural number is " + sum);
*/

/*
//For-in loop
let obj = {
  aman: 90,
  mukesh: 80,
  rahul: 60,
  simran: 10,
  jasmine: 15,
};
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

//for-of loop
for (let b of "aman") {
  console.log(b);
}

*/
/*
let sum = 0;
while (true) {
  let value = +prompt("Enter a value", "");
  if (!value) break;
  sum += value;
}
alert("sum:" + sum);
*/

//breaking-the-loop
/*
let multi = 0;
while (true) {
  let value = +prompt("Enter a number", " ");
  if (!value) break;
  multi *= value;
}
alert("multi:" * multi);
*/
/*
for (i = 0; i < 20; i++) {
  if (i % 2 == 0) continue;
  alert(i);
}
*/

/*
//Label for break&continue
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`value at coords(${i},${j})`, "");
  }
}
alert(`Done!`);
*/

//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

//The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

//Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
/*
let num;
do {
  num = prompt("Enter a greater than 100", 0);
} while (num <= 100 && num);
*/
let n = 20;
nextprime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextprime;
  }
  alert(i);
}
