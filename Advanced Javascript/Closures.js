//Example 1
// message = "Good Afternoon";
// function hello() {
//   let message = "Good Morning";

//   // let message = "Hello World"; // let is a block scope
//   console.log("hey " + message); //hey Hello World
//   //   console.log(message); // Good Morning
//   let c = function hello2() {
//     console.log("I am c " + message);
//   };
//   return c;
// }
// c = hello();
// c();
// hello();

//Example 2
// function init() {
//   var name = "Deepak";
//   function displayname() {
//     console.log(name);
//   }
//   name = "Aman";
//   return displayname;
// }
// let c = init();
// c();

//Example 3
function returnfunc() {
  const x = () => {
    let a = 1;
    console.log(a);
    const y = () => {
      // let a = 2;
      console.log(a);
      const z = () => {
        // let a = 3;
        console.log(a);
      };
      z();
    };
    a = 999;
    y();
  };
  x();
}

let a = returnfunc();
a();
