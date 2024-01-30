let promise = new Promise(function (resolve, reject) {
  alert("hello");
  resolve(10000000);
});

console.log("hello one");
setTimeout(function () {
  console.log("hello two in 2 sec");
}, 2000);
console.log("hello three");
console.log(promise);
