//Problem 1. write a JS program to print the following after 2 second deloy "Hello " "World"


const a = async (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};

(async () => {
  let text = await a("Hello");
  console.log(text);
  text = await a("world");
  console.log(text);
})();


//Problem 2. write a js program to find average of number in an arrray using speaad syntax

function sum(a, b, c) {
  return a + b + c;
}
let x = [1, 2, 3];
console.log(sum(...x)); 

//Problem 3. write a js function which resolve a Promise after n seconds. The function takes n as thee parameter.
// use an IIfe to execute the function with different values of n

// const a = async (text, n = 2) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, 1000 * n);
//   });
// };

// (async () => {
//   let text = await a("i am resolving afte 1 seconds", 1);
//   console.log(text);
//   text = await a("i am resolving after 4 seconds", 4);
//   console.log(text);
// })();

//wrritee a simple interst calcultor using JS
// function simpleinterst(p, r, t) {
//   return (p * r * t) / 100;
// }
// console.log(simpleinterst(1000, 8, 2));
