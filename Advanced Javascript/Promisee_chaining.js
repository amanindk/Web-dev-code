// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds");
//     resolve(56);
//   }, 2000);
// });
// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     // console.log("Promise 2");
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// })
//   .then((value) => {
//     console.log("wee are done baby");
//   })
//   .then((value) => {
//     console.log("hello i am done");
//   });

const loadscript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Script has been loaded bhi");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};
let P1 = loadscript(
  "https://www.youtube.com/watch?v=RPLt3TiH6zg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=56"
);
P1.then((value) => {
  console.log(value);
  return loadscript(
    "https://www.youtube.com/watch?v=RPLt3TiH6zg&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=56"
  ).then((value) => {
    console.log("second scripy is ready");
  });
}).catch((error) => {
  console.log(
    "wee are some error but we are having problem loading this problem"
  );
});
