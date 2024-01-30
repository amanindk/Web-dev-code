//Optional chaining '?.'
//The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

/*
let user = {}; // a user without "address" property

alert(user.address.street); // Error!
*/
/*
const user = {
  name: "aman",
  age: 23,
  clg: "PIT",
  address: {
    city: "Rajpura",
    state: "Punjab",
  },
};
// console.log(user.address.city.house.pincode); // error
// console.log(user.address.city.house?.pincode); // undifined
// console.log(user.address.city?.house?.pincode); // undefined
*/
// optional chainning use array
/*
const user = [
  { name: "aman", age: 23 },
  { name: "deep", age: 13 },
  { name: "rni", age: 22 },
];
// console.log(user[1].name);
console.log(user[3]?.name); //undefined
*/

/*
// document.querySelector('.elem') is null if there's no element
let html = document.querySelector(".elem").innerHTML; // error if it's null

//Other variants: ?.(), ?.[]

let userAdmin = {
  admin() {
    console.log("iam admin");
  },
};
let userGustadmin = {};

userAdmin().admin;
*/

let n = 1.23456;
alert(n.toFixed(1)); //1.2
alert(n.toFixed(2)); //1.23
alert(n.toFixed(3)); //1.2356
alert(n.toFixed(4)); //1.2346

alert(typeof 0); // "number"

alert(typeof new Number(0)); // "object"!
