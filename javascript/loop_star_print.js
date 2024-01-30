/*
let n = 5;
let m = 5;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
*/
/*
                                     
*/
let n = 5;
// let m = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n + 1; j++) {
    string += "";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}

console.log(string);
/*
let a = +prompt("a?", "");
switch (a) {
  case 1:
    alert("1");
    break;

  case 2:
    alert("2");
    break;

  case 3:
  case 4:
    alert("3 or 4");
    break;
}
*/
/*
let i,
  j,
  k,
  l,
  star = "";
for (i = 1; i <= 5; i++) {
  for (k = 1; k <= 5 - i; k++) {
    // document.write("&nbsp;&nbsp");
    star += "&nbsp;&nbsp";
  }

  for (j = 1; j <= i; j++) {
    // document.write("*");
    star += "*";
  }
  for (l = 2; l <= i; l++) {
    // document.write("*");
    star += "*";
  }
  // document.write("<br>");
  star += "*<br>";
}
// document.getElementById("display").innerHTML = star;
console.log(star);
*/
