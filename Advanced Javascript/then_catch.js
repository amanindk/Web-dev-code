let P1 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("i am promise and i am fullfuilled & and resolved");
    resolve(true);
  }, 4000);
});
let P2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("i am promise and i am rejected  ");
    // resolve(true);
    reject(new Error(" i am promise error and rejected "));
  }, 4000);
});
// console.log(P1, P2);

//To catch the value
P1.then((value) => {
  console.log(value);
});

//To catch the error
// P2.catch((error) => {
//   console.log("some error in occurred in p2");
// });

P2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
