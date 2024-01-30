let arr = [1, 2, 3, 4, 5, 6];
//No need to  do this
// let a = arr[0];
// let b = arr[1];
// let [a, b, c,...rest] = arr;
// console.log(a, b, c,rest);
let [a,, , ...rest] = arr;
console.log(a, b, c, rest);
