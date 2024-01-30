//Conversion

//String Conversion

let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

//Number Conversion

alert("6" / "2"); //3
alert("6" + "2"); //62
alert("6" * "2"); //12

let str = "123";
alert(typeof str);

let num = Number(str);
alert(typeof num);

let age = Number("an arbitrary string instead of a number");

alert(age); // NaN
/*
alert(Number("  123  ")); // 123
alert(Number("  123z  ")); //NAN
alert(Number(true)); //1
alert(Number(false)); //0

//Boolen Conversion

//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
//Other values become true.

alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("hello")); // true
alert(Boolean("")); // false
*/

// JavaScript, a non-empty string is always true.

alert(Boolean("0")); //true
alert(Boolen(" ")); // true
