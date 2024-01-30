let P1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("value 1");
    reject(new Error("EError"));
  }, 1200);
});
let P2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 2");
  }, 2000);
});
let P3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("value 3");
  }, 3000);
});
// P1.then((value) => {
//   console.log(value);
// });
// P2.then((value) => {
//   console.log(value);
// });
//       P3.then((value) => {
//   console.log(value);
// });
// let promise_all = Promise.all([P1, P2, P3]);
let promise_all = Promise.allSettled([P1, P2, P3]);
// let promise_all = Promise.race([P1, P2, P3]);
// let promise_all = Promise.any([P1, P2, P3]);

promise_all.then((value) => {
  console.log(value);
});
