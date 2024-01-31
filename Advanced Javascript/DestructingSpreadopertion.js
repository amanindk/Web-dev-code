let arr = [1, 2, 3, 4, 5, 6];
//No need to  do this
// let a = arr[0];
// let b = arr[1];
// let [a, b, c,...rest] = arr;
// console.log(a, b, c,rest);
// let [a, , b, ...rest] = arr;
// console.log(a, b, rest);
let { a, b } = { a: 31, b: 23 };
// console.log(a, b);

//Spread opertor
let arr1 = [5, 2, 3, 4, 5, 6];
let obj = { ...arr1 };
console.log(obj);

function sum(a1, a2, a3) {
  return a1 + a2 + a3;
}
console.log(sum(...arr1));

let obj2 = {
  name: "Deep",
  age: 23,
  gender: "male",
  hobbies: ["football", "basketball", "cricket"],
};
// console.log({ ...obj2, name: "Aman" ,gender: "female"});
console.log({ name: "Aman", gender: "female", ...obj2 }); //is case mee ovrrride nhi honhgi becaause ...obj2 baad m likkha ha
