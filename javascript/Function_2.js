//Function

/*
function showMessage() {
  alert("hello Aman");
}
showMessage();
showMessage();

showMessage();

showMessage();

*/

/*
//Local Variable
function callthemsg() {
  let message = "hello i'm Aman"; // Local Variable

  alert(message);
}
callthemsg(); //hello i'm Aman
callthemsg(); //hello i'm Aman

alert(message); // ERRor
*/

/*
// Outer variable
let userName = "Aman";
function nameman() {
  let message = "hello   " + userName;
  alert(message);
}
nameman(); // Hello Aman

*/

/*
let userName = "Aman";
function showname() {
  userName = "Deep";
  let message = "Hello " + userName;
  alert(message);
}
alert(userName); //aman
showname(); //HelloAman
alert(userName); //Deep
 */

/*
// shadow methods
let userName = "Deep";
function shadowing() {
  let userName = "Amanaaa"; //shadow methods
  let message = "hello, " + userName;
  alert(message);
}
alert(userName); //deep
shadowing(); // hello aman
alert(userName); //deep
*/

// Parameter
/*
                                  function showname(from, text, type)  {
                                    alert(from + ":" + text + ":" + type);
                                  }
                                  showname("Aman ", "  ", " singh");
                                  showname("  ", "Deep", " singh");
                                  showname("Raju ", " rani", " Ram");
*/
/*
function shoeName(from, text) {
  from = "*" + from + "*";
  alert(from + " : " + text);
}
let from = " Amn ";
shoeName(from, " Hey..."); //Amn Hey....
alert(from); //Amn
*/
/*
                                  function showMessage(from, text = "no text given") {
                                    alert(from + ": " + text);
                                  }
                                  
                                  showMessage("Ann"); // Ann: no text given
*/
//using  || opertor
/*
function showMessage(from, text) {
  // If the value of text is falsy, assign the default value
  // this assumes that text == "" is the same as no text at all
  text = text || "no text given";
  console.log(`${from}:${text}`);
}
showMessage("Aman", "deep");
*/
/*
function showMessage(from, text) {
  text = text ?? "no text message"; // ?? that is nullish coalesing opertor, it finds first undefined value
  document.write(`${from}:${text}`);
}
showMessage("Aman");
*/

//Alternative default parameters
/*
                                  function showMessage(text) {
                                    if (text === undefined) {
                                      text = "empty message ";
                                    }
                                    alert(text);
                                  }
                                  showMessage();



*/

/*
function showMessage(text) {
  text = text || "no text given";
}
*/

//  Nullish coalescing operator '??'
//result = (a !== null && a !== undefined) ? a : b;
/*
                                  let user;
                                  alert(user ?? "Anonymous"); //Anonymous (user is undefined)
*/
/*
let user = "jonnu";
alert(user ?? "Anonymous");
*/
/*
                                     let firstName = null;
                                     let middleName = null;
                                     let nickName = "Raju";
                                     alert(firstName ?? middleName ?? nickName ?? "Anonymous");
/
/*
let myVal = 0;
const mynumber = myVal || 10;
const mynumber2 = myVal ?? 10;
console.log(mynumber);
console.log(mynumber2);
*/

/*
                                       let height = null;
                                       
                                       alert(height || 100); // 100
                                       alert(height ?? 100); // 0
*/

//Example Coalsacing Opertor
/*
let P = null;
let R = 20;
let T = null;
let V = 10;

let result = ((P ?? 20) * (R ?? 30) * (T ?? 20)) / (V ?? 100);

alert(result);  //(20*20*20)/10 = 800
*/
/*
function showcount(count) {
  alert(count ?? "unknown");
}
showcount(0); //0
showcount(null); //unknown
showcount(); //unknown
*/

//Returning a value

/*
function sum(a, b, c, d) {
  return a + b + c - d;
}

let result = sum(1, 2, 3, 4);
alert(result); // 6-4 = 2
*/
/*
                                       function checkAge(age) {
                                         if (age >= 18) {
                                           return true;
                                         } else {
                                           return confirm("Do you have permission from your parents ?");
                                         }
                                       }
                                       let age = prompt("How old are you ?", 18);
                                       if (checkAge(age)) {
                                         alert("Acces granted");
                                       } else {
                                         alert("Acess denied");
                                       }
     
                                       */
/*
function sum() {}
console.log(sum());
if (sum() === undefined) {
  console.log("true");
}
*/

/*
function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("Showing you the movie"); // (*)
}
*/

/*
function showPrimes(n) {
  // nextPrime:
  for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0);
      continue;
      // nextPrime;
    }

    alert(i); // a prime
  }
  showPrimes(n);
}
*/
/*
                                   
                                   function checkAge(age) {
                                     if (age > 18) {
                                       return true;
                                     } else {
                                       return confirm("Did parents allow you?");
                                     }
                                   }
*/

/*
function min(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
*/
/*
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
let x = prompt("x?", "");

let n = prompt("n?", "");
if (n < 1) {
  alert(`Power ${n} is not supported,use a positive integer `);
} else {
  alert(pow(x, n));
}
*/

/*
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
// console.log(return);
*/

//javascript kaam kaise krti ha
function x() {
  var fx = "1st function ";
  console.log(fx);
  y();
}
function y() {
  console.log("2nd function");
  z();
}
function z() {
  console.log("3rd function");
}

x();
