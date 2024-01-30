// var str = "                hello i am student but i work in IT sector";
// var a = str.length;     //42
// // var a = str.toLowerCase();
// // var a = str.toUpperCase();
// var a = str.includes("but");   //true
// var a = str.startsWith("hello");   //true
// var a = str.endsWith("IT");  // false

// var a = str.replace("i", "sector");   //hello sector am student but i work in IT sector
// var a = str.search("am");   //8
// var a = str.lastIndexOf("am");   //8
// var a = str.trim();  //remove the space

// console.log(a);

// var a = str.charAt;   //function charAt() { [native code] }
// var a = str.charCodeAt(2);

// var a = new Date(); //present time new date and time

// document.write(a);
// document.write(a.toDateString());   //  Fri Sep 01 2023  // mention week  months date year
// document.write(a.getDate()); //Return the date
// document.write(a.getDay());  // Return the day
// document.write(a.getFullYear());  //Return the year
document.write(a.getHours()); //Hors
// document.write(a.getMinutes());
// document.write(a.getMonth());

//console.log(a);
/*
 */

/*
let a = "Aman";
console.log(a);
console.log(a.replace("Am", "sa"));
console.log(a.length);
console.log(a[0]); //A
console.log(a[1]); //m

//Escape sequence charcters

let fruits = "Bana\nna";
console.log(fruits);
console.log(fruits.length); //7

let name = "Amandeep Singh";
*/

/*
console.log(name);
console.log(name.length); //8
console.log(name.toUpperCase()); //AMANDEEP
console.log(name.toLowerCase()); //amandeep
console.log(name[(0, 1)]); // m
*/

/*
console.log(name.slice(2, 7)); //andee

console.log(name.replace("singh", "Kaur"));

let friend = "Rana";
console.log(name.concat(" is a friend of ", friend, " ok"));
*/

/*
let guestList = "Guests:\n  Rana\n  Jazzy\n  Aman";

console.log(guestList); // a multiline list of guests, same as above
*/

/*
alert(`The backslash: \\`); // The backslash: \

alert("I'm the Walrus!"); // I'm the Walrus!

let str = `Hello`;

// the first character
alert(str[0]); // H
alert(str.at(0)); // H

// the last character
alert(str[str.length - 1]); // o
alert(str.at(-1)); //  .at(-1) means the last character, and .at(-2) is the one before it
*/

/*
let str = `Hello`;

alert(str[-2]); // undefined
alert(str.at(-2)); // l   //  .at(-1) means the last character, and .at(-2) is the one before it
*/

/*
let str1 = "Hi";

str1[0] = "h"; // error
console.log(str1[0]); // doesn't Swork
*/

/*
let str = "Hi";

str = "h" + str[1]; // replace the string

alert(str); // hi
*/

// let str = "Widget with id";

// alert(str.indexOf("id", 2)); // 12

// let str = "stringify";

// start at the 4th position from the right, end at the 1st from the right
alert(str.slice(-4, -1)); // 'gif'

// let str = "stringify";

// these are same for substring
alert(str.substring(2, 6)); // "ring"
alert(str.substring(6, 2)); // "ring"

// ...but not for slice:
alert(str.slice(2, 6)); // "ring" (the same)
alert(str.slice(6, 2)); // "" (an empty stri

//CODE POINT

// different case letters have different codes
alert("Z".codePointAt(0)); // 90
alert("z".codePointAt(0)); // 122
alert("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)

//String.fromCodePoint(code)
alert(String.fromCodePoint(90)); // Z
alert(String.fromCodePoint(0x5a)); // Z (we can also use a hex value as an argument)

let str = "";

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert(str);
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
