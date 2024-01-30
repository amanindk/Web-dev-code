// document.getElementById("google").addEventListener("click", function () {
//   var url = "https://www.google.com/search?q=javascript";
//   var win = window.open(
//     url,
//     "",
//     "width=500,height=500,scrollbars=yes,resizable=yes"
//   );
//   win.focus();
// });

//Problem 3
/*
document.getElementById("google").addEventListener("click", function () {
  window.location = "https://www.google.com/";
  win.focus();
});
document.getElementById("fb").addEventListener("click", function () {
  window.location = "https://www.facebook.com/";
  win.focus();
});
document.getElementById("insta").addEventListener("click", function () {
  window.location = "https://www.instagram.com/";
  win.focus();
});
*/

// Problem 4
/*
const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json();
  return a;
};

setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  console.log(await fetchContent(url));
}, 3000);
*/
setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulbcontainer");
}, 300);
