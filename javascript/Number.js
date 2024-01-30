//Number
//Regular numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision floating point numbers”. These are numbers that we’re using most of the time, and we’ll talk about them in this chapter.

//BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can’t safely exceed (253-1) or be less than -(253-1), as we mentioned earlier in the chapter Data types. As bigints are used in few special areas, we devote them a special chapter BigInt.
/*
let billion = 1e9;
console.log(7.3e9); //7300000000

1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000

// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

//Hex, binary and octal numbers
alert(0xff); //255

let a = 0b11111111; //binary
let b = 0o377; //octal
alert(a == b);

//toString(base)
let num = 255;
alert(num.toString(16)); //ff
alert(num.toString(2)); //  11111111

alert((123456).toString(36)); // 2n9c
*/

/*
let num = 1.23456;
alert(Math.round(num * 100) / 100); //1.23456 = 123.456 = 123 = 1.23
*/

/*
let num = 12.34;
alert(num.toFixed(0)); // "12"
*/

/*
let num = 12.34;
alert(num.toFixed(1)); // "12.3"
*/

/*
let num = 12.34;
alert(num.toFixed(2)); // "12.34"
*/

/*
let num = 12.34;
alert(num.toFixed(3)); // "12.340"
*/

/*
let num = 12.34;
alert(num.toFixed(4)); //12.3400

alert(1e500); // Infinity
*/

/*
alert(9999999999999999); //   1000000000000000

alert(parseInt("100px")); // 100
alert(parseFloat("12.5em")); // 12.5

alert(parseInt("12.3")); // 12, only the integer part is returned
alert(parseFloat("12.3.4")); // 12.3, the second point stops the reading

alert(parseInt("0xff", 16)); // 255
alert(parseInt("ff", 16)); // 255, without 0x also works

alert(parseInt("2n9c", 36)); // 123456

alert(Math.random()); // 0.1234567894322
alert(Math.random()); // 0.5435252343232
alert(Math.random()); // ... (any random numbers)

alert(Math.max(3, 5, -10, 0, 1)); // 5
alert(Math.min(1, 2)); // 1

alert(Math.pow(2, 10)); // 2 in power 10 = 1024

*/

/*
//convert string to number
let a = "200";
var num = Number(a);
console.log(a);
console.log(typeof a); // String
console.log(typeof num); //Number

let b = true;
// let c = false;
var num = Number(b);
console.log(num); //1
*/

/*
//parseInt
console.log(parseInt("56.78")); //56
console.log(parseInt("23  78")); //23
console.log(parseInt("245  hlioo")); //23
console.log(parseInt(" hi bhai 245  hlioo")); //NAN only integer value

//parseFloat
console.log(parseFloat(10.67)); //10.67
console.log(parseFloat(10.6)); //10.6
*/

//isFinite and isInteger

// console.log(Number.isFinite(100)); //true
// console.log(Number.isFinite("100")); //false
// console.log(Number.isFinite(Infinity)); //false

console.log(Number.isInteger(100)); //true
console.log(Number.isInteger(100.55)); //false
