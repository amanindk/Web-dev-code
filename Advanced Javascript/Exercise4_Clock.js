/*
let a = new Date();
let h = a.getHours();
let m = a.getMinutes();
let s = a.getSeconds();
let d = a.getDate();
// console.log(h, m, s, d);
document.write(h, m, s, d);
*/

/*
setInterval(() => {
  let d = new Date();
  time.innerHTML = d;
}, 100);
*/

setInterval(() => {
  let date = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  let d = date.toLocaleTimeString("en-us", options);
  time.innerHTML = d;
}, 100);
