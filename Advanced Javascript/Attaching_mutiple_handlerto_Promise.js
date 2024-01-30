let P1 = new Promise((resolve, rejected) => {
  //   alert("hey i am not ressolved ");
  setTimeout(() => {
    resolve(1);
  }, 2000);
});
P1.then(() => {
  console.log("hello bhai");
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      resolve(4);
    }, 4000);
  });
}).then((value) => {
  console.log(value);
});
P1.then(() => {
  console.log("congratulation this promise is now resolved");
});
