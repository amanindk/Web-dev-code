// Problem 1 write a program to load a javascript file in a browser using promise.
//Use .then() to display an alert when the load is complete

/*
const loadscript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done Successfully");
    };
    document.head.append(script);
  });
};

let a = await loadscript(
  "https://www.youtube.com/watch?v=y1j2FL9d31w&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=63"
);
a.then((value) => {
  console.log(value);
});
*/

//Problem 2 write the same program fron previous qustion and async await
/*
const main = async () => {
  console.log(new Date().getMilliseconds());
  let a = await loadscript(
    "https://www.youtube.com/watch?v=y1j2FL9d31w&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=63"
  );
  console.log(a);
  console.log(new Date().getMilliseconds());
  console.log(new Date());
};
main();
*/

//Problem 3 create a promise which rejects after 3 seconds use a async / await to get its value.
//use a try catch to handle its error
/*
let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("pleasee this is not acceptable "));
    }, 3000);
  });
};
let a = async () => {
  try {
    let c = await p();
    console.log(c);
  } catch (err) {
    console.log("this error has been handle");
  }
};
a();
*/

//Problem 4
let P1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 1000);
  });
};
let P2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 2000);
  });
};
let P3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

const run = async () => {
  console.time("run");
  //   let a1 = await P1();
  //   let a2 = await P2();
  //   let a3 = await P3();

  let a1 = P1();
  let a2 = P2();
  let a3 = P3();
  let a1a2a3 = await Promise.all([a1, a2, a3]);
  console.log(a1a2a3);
  //   console.log(a1, a2, a3);
  console.timeEnd("run");
};
run();
