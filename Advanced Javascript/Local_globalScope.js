//global and block scope
/*
{
  var a = 9; // let ka use kartee haa toh block scope hotaa ha
  //let ka usee karege toh eerror
  //aegaar or var ka usee karegee toh nhi aweegaa
  //var ka global sscope hota ha
  // let block scope hota ha
}
console.log(a);
*/

//function scope
let global = 7;
function x() {
  let b = 6;
  console.log(global);
  console.log(b);
}
x();
console.log(global);
console.log(b);
//function or global dono local cope hotee ha 
