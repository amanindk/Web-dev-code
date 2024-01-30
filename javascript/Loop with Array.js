//loop with array

/*
let num = [23, 1, 3, 4, 7, 9, 13];
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//forEach lool
num.forEach((Element) => {
  console.log(Element * Element); //squaare
});

num.forEach((Element) => {
  console.log(Element + Element);
});

//Array.form
let name = "Aman";
let arr = Array.from(name);
console.log(arr); //[ 'A', 'm', 'a', 'n' ]

*/
//for...of
let num = [23, 1, 3, 4, 7, 9, 13];
for (let i of num) {
  console.log(i);
}

//for..in
for (let i in num) {
  console.log(i); //0,1,2,3,4,5,6
  console.log(num[i]);
}
