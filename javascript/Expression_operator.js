//Opertor

//Reminder
/*

alert(6 % 2); //0  ,  the remainder of 6 divided by 2
alert(8 % 3); // 2, the remainder of 8 divided by 3
alert(5 % 2); // 1 ,  the remainder of 5 divided by 2

//Exponentiattion**

//square
alert(2 ** 2); //2 square of 2
alert(5 ** 8);
alert(4 ** 8);

//Square Root & Cube root
alert(4 ** (1 / 2)); //2 (power of 1/2 is the same as a square root)
alert(8 ** (1 / 3)); // 2 (power of 1/3 is the same as a cube root)

//String Concatenation with binary +

let s = "My" + "Name";
alert(s); //MyName

alert(1 + 1 + 1 + 9); //12
alert("1" + "1" + "1" + "9"); //1119
alert("9" + 1 + 1 + 1); //9111

alert(6 - "2"); //4
alert("6" / "2"); //3
*/
//Numeric conversion,unary +

/*
let apples = "2";
let Mango = "3";
alert(2 + 3); //5
alert(apples + Mango); //23
alert(+apples + +Mango); //5
//long vaarient

alert(Number(apples) + Number(Mango));

//Increment and decrement
let counter = 2;
counter++;
//counter = counter + 1
alert(counter);

//decrement
let counter1 = 3;
counter1--;
//Counter = counter - 1
alert(counter1);
*/

// let counter = 1;
// let a = ++counter;
// alert(a);

// let counter = 0;
// counter++;
// ++counter;
// alert(counter);

// let counter = 0;
// alert(counter++);
/*
let counter = 0;
alert(++counter);

let a = 1,
  b = 1;

alert(++a); //2
alert(b++); //1

alert(a); //2
alert(b); //2
*/

77;
("Aman bhai");
console.log("operator in js");
//Arithmetric Operator
// let a = 10;
// let b = 3;
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a / b =", a / b);
// console.log("a * b =", a * b);
// console.log("a ** b =", a ** b); //square
// console.log("a % b =", a % b); //modulus

// //Increment opertor
// // a = 11
// console.log("++a   =", ++a); //11
// console.log("a++ =", a++); //11
// console.log("--a  =", --a); //11
// console.log("a-- =", a--); //11

// console.log("a   =", a); //10
// console.log("a-- =", a--); //10

// console.log("b-- =", b--);
// console.log("b =", b);
// console.log("--b =", --b);

//Assignment  Operator
let ass = 2;
ass += 5; // ass = ass + 5
console.log(ass); //7

ass -= 5; // ass = ass - 5
console.log(ass); // 7-5 = 2

ass *= 5; // ass = ass*5
console.log(ass); //2*5 = 10

ass /= 5; //ass = ass/5
console.log(ass); //10/5 = 2

let x = 5,
  y = 9;
x += 5; //same as x = x+5
console.log("x is now =", x);

y -= 4;
x *= 5;
console.log("x is now =", x);

x /= 5;
console.log("x is now =", x);

x **= 5;
console.log("x is now =", x);

x %= 5;
console.log("x is now =", x);

console.log(x);
console.log(y);

// Comparision Operator
let comp1 = 6;
let comp2 = "6";
console.log("comp1 == comp2 is ", comp1 == comp2); //True
console.log("comp1 != comp2 is ", comp1 != comp2); // f
console.log("comp1 === comp2 is ", comp1 === comp2); // F this is check the value string and no.
console.log("comp1 !== comp2 is ", comp1 !== comp2);

//Logical Operator
let n = 5;
m = 7;

//&& And Gate
//|| OR Gate
console.log(n < m && m == 7); //True
console.log(n < m || m == 7); //True
console.log(!false);
console.log(!true);
