// null Number Symbol String Bigint Bolean Undifined
//nn ss bb u
/*
let a = null;
let b = 34;
let c = true; //boolean can also be false
let d = BigInt("678") + BigInt("2"); //bigint
let e = "Deep"; //string
let f = Symbol("i am a symbool"); //symbol
let g = undefined;

let h = false;
let i; // undefined
console.log(a, b, c, d, e, f, g, h, i);
console.log(typeof b);
console.log(typeof d);
*/
/*
                                         //Object
                                         const item = {
                                           Aman: false,
                                           Deepa: true,
                                           Rooby: 56,
                                           Rani: undefined,
                                         };
                                         console.log(item["Aman"]); // false
                                         console.log(item["Rani"]); // undefined
                                         */

//Data Types

// Number
/*
alert(0 / 1);
alert(1 / 0);
alert("not a number" / 2);

alert(NaN + 1); // NaN
alert(1 + NaN + 1); // NaN

alert(3 * NaN); // NaN
alert("not a number" / 2 - 1); // NaN
*/

//Bigint
/*
                                                console.log(10000000 + 1); //9999999
                                                console.log(2000000000 - 1); //199999999
                                                

*/

//String
/*
// let str = "hello bhai";
// let str2 = "Single quotes";
// let pharse = `can embed another ${str}`;

let name = "Aman";
//use emded a variable
alert(`Hello, ${name}!`);

// embed an expression
alert(`my result is ${3 + 2}`);

//use double qoutes
alert("my result is ${3+4}"); // don't work functionality embed
*/

/*
                                              // Boolean(logical type)
                                              
                                              let isgreater = 4.5 > 3;
                                              alert(isgreater); // true
                                              
                                              let isgreater1 = 4.5 < 3;
                                              alert(isgreater1); // false
                                              */

/*                                              
//Null
let age = null;
*/
//Undefinate value

let age;
alert(age);

let name = "Amn";
name = undefined;
alert(name);
