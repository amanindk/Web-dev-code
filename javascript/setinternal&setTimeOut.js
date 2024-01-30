document.write("Hello");

let a = setTimeout(function () {
  alert("I am inside of settimeout");
}, 2000);

const sum = (a, b) => {
  console.log("yes i am running" + (a + b));
  a + b;
};

setTimeout(sum, 5000, 1, 2);

// let b = prompt("do you want to run the settimeeout?");
// if ("n" == b) {
//   clearTimeout(a); //clear the time
// }

// console.log(a);

//Set interval
setInterval(function () {
  alert("runing the set interval");
}, 2000);

const multi = (x, y) => {
  console.log("yes i am running setinterval" + x * y);
  x * y;
};

setInterval(multi, 6000, 3, 5);
