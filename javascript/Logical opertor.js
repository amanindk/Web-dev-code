//Logical opertor
//There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

//OR

//1 = TRUE AND 0 = FALSE
// alert(true || true); // true
// alert(true || false); // true
// alert(false || true); // true
// alert(false || false); // false

// //and
// alert(true && true); // true
// alert(true && false); // f
// alert(false && true); // f
// alert(false && false); // false
/*
                                                     
                                                     let firstname = "aman";
                                                     let lastname = "";
                                                     // let nickname = "SuperCoder";
                                                     let specialname = "";
                                                     
                                                     alert(firstname || lastname || nickname || specialname || "Anonymous");
                                                     */
//Nullish coalescing operator '??'

// let user;
// alert(user ?? "Anonymous");

// let user = "aman";
// alert(user ?? "Anonymous");
/*
let firstname = null;
let lastname = null;
let nickname = "SuperCoder";
let specialname = "";

alert(firstname ?? lastname ?? nickname ?? specialname ?? "Anonymous");
*/

// let height = 0;

// alert(height || 100);
// alert(height || 30);
// alert(height ?? 100);

let height = null;
let width = null;
let area = (height ?? 100) * (width ?? 50);
alert(area);
