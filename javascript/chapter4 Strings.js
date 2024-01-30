//Chapter 4 Practise set Strings
/*
//Q1 what will thee following print in JS  console.log("har\.length")
let str = 'Aman"';
console.log('Aman".length');
*/

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox2";

//Q2 explore th includes, Startwith, Endwith function of a String
//inculeswith
console.log(sentence.includes(word)); //true ya false
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
// Expected output: "The word "fox" is in the sentence"

//startwith
const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("Sat", 3));
// Expected output: false

/*
//Endswith
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
*/
//Q3 write a program to convert a given string to lowecase

let name = "Amandeep Singh";
console.log(name.toUpperCase()); //AMANDEEP
console.log(name.toLowerCase()); //amandeep

//Q4 Extract  the ammount out of this string  "Please give Rs 1000"

let str2 = "Please give Rs 1000";
//convert String to Number
let amount = Number.parseInt(str2.slice("Please give Rs ".length));

let amount1 = str2.slice(15);
console.log(amount); //1000
console.log(typeof amount); // number
console.log(amount1); //1000
console.log(typeof amount1); //string

//Q5 TRy to change 4th Charcter of a given string were you able to do it/

let friend = "Deepika";
friend[3] = "t";
console.log(friend); //not change character  because string is immutable
