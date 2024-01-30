//chapter 5 array
//Create an array of  number and take input from the user to add number to this array
/*
let arr = [1, 2, 3, 4, 5, 6];
let a = prompt("Enter the Number  ");
a = Number.parseInt(a);
arr.push(a);
document.write(arr);
*/

//problem 2: keep adding number to the array in 1 until 0 is added to the array
/*
let ar = [, 5, 4, 3, 2, 2];
do {
  var b = prompt("enter the number");
  b = Number.parseInt(b);
  ar.push(b);
} while (b != 0);
document.write(ar);
*/

//Problem 3 :Filter for number divisible by 10 from a giveen array
/*
let aa = [12.2, 15, 10, 30, 550, 65, 70];
let arr2 = aa.filter((a) => {
  return a % 10 == 0;
});
console.log(arr2, aa);
*/

//problem 4: Create an array of squre of given number
/*
let m = [23, 4, 2, 6, 9, 27, 17, 16, 3];
let m1 = m.map((Element) => {
  console.log(Element * Element);
});
*/

//same
/*
let m = [23, 4, 2, 6, 9, 27, 17, 16, 3];
let m1 = m.map((Element) => {
  return Element * Element;
});
console.log(m1);
*/

//Problem : use reduce to calculate factorial of a given number from an array of first n naaturl number( n being  the number  whose factorial need  to be calculated)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = arr.reduce((A, B) => {
  return A * B;
});
console.log(n);
