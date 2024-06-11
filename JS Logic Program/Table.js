function table(number) {
  for (var i = 1; i <= 10; i++) {
    var res = i * number;
    console.log(`${number} x ${i} = ${res}`);
  }
}
table(5);
// table(50);

// let n = prompt("Enter the number");
// for (var i = 1; i <= 10; i++) {
//   var res = i * n;
//   console.log(`${n} x ${i} = ${res}`);
// }
