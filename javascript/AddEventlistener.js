/*
btn.addEventListener("click", function (e) {
  alert("hello world 1");
});
btn.addEventListener("click", function (e) {
  alert("hello world 2");
});
btn.addEventListener("click", function (e) {
  alert("hello world 3  ");
});

let a = prompt("what is your fvourite Number");

if (a == "2") {
  btn.removeEventListener("click", function (e) {
    alert("hello world 4");
  });
}
*/

let x = function (e) {
  console.log(e.target);
  console.log(e.type, e.clientX, e.clientY);
  // alert("hello world 1");
  // console.log(e);
};

let y = function (e) {
  console.log(e);

  alert("hello world 2");
};

btn.addEventListener("click", x);

// btn.addEventListener("click", y);

// let a = prompt("what is your favourite no. ");

// if (a == "2") {
//   btn.removeEventListener("click", y);
// }
