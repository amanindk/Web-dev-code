function name() {} // thatis function scope

{
  // any code
  /////////////
} // block scope

{
  var a = 5;
  console.log(a); // global sco[pe]
}

// variable shadowing -----------------------------------------------------------------------------------------------------
// function test() {
//   let a = "hi";
//   if (true) {
//     let a = "hello";
//     console.log(a);
//   }
//   console.log(a);
// }

// test();
//hllo
//hi    //result

function test() {
  let a = "hi";
  let b = "Bye";
  if (true) {
    let a = "hello";
    let b = "GoodBye";
    console.log(a);
    console.log(b);
  }
  //   console.log(a);
  //   console.log(b);
}

test();

// heelloo,goodbye and after

//Declaration -----------------------------------------------------------------------------------------------------------
var a;
var a;
// var redeclarde multiple time

// let a;
// let a;
// let not redeclarde multiple time Identifier 'a' has already been declared

// const a;
// const a;
// let not redeclarde multiple time Identifier 'a' has already been declared

// Initialisation -----------------------------------------------------------------------------------------------------
// const a = 5; //  let & const SyntaxError: Identifier 'a' has already been declared
// a = 6;

//Hoisting ------------------------------------------------------------------------------------------------------------

// var count;
// console.log(count);
// let count = 1; // undfined

function abc() {
  console.log(a);
  var a = 11;
}

abc(); // undefined
