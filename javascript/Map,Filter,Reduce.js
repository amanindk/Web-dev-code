//Array Map method

/*
let num = [1, 2, 3, 4, 5];
let a = num.map((value, index, Array) => {
  console.log(value, index, Array);
  return value + index;
  //   return value * 2;
});
console.log(num); //[ 2, 4, 6, 8, 10 ]
*/

// Array Filter method
let arr = [22, 12, 3, 7, 15, 10, 5, 8, 6, 13];
let arr2 = arr.filter((a) => {
  return a < 10;
});
console.log(arr2, arr); //[ 3, 7, 5, 8, 6 ]

//Array Reduce Method
let ar = [1, 2, 3, 3, 2, 1];
let ar1 = ar.reduce((A, B) => {
  return A + B;
});
console.log(ar1); //12 1+2 = 3+3 = 6+3 = 9+2 = 11+1 =12

//fn.
const reduce_func = (A, B) => {
  return A + B;
};
let newArray = ar.reduce(reduce_func);
console.log(newArray);

let recipeMap = new map(["Apple", 100][("Banana", 200)][("grapes", 300)]);

// iterate over keys (vegetables)
for (let fruit of recipeMap.keys()) {
  console.log(fruit);
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount);
}

// iterate over [key, value] entries
for (let entries of recipeMap) {
  console.log(entries);
}
