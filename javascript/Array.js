/*
let marks_class_12 = [23, 45, 78, 87, null, false, "Not present "]; //differwnt type value stored in array
console.log(marks_class_12[0]); //23
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]); //87
console.log(marks_class_12[4]); //null
console.log(marks_class_12[5]); //false
console.log(marks_class_12[6]); //not present
console.log(marks_class_12[7]); //undefines
console.log("The lenght of marks_class_12 is = ", marks_class_12.length);

marks_class_12[7] = 67;
marks_class_12[0] = 89;

console.log(marks_class_12);
console.log(typeof marks_class_12); //object
*/

let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[fruits.length - 1]); // Plum
// console.log(fruits.at(-1)); // Plum

//pop = Extracts the last element of the array and returns it:
console.log(fruits.pop()); // remove "Plum" and alert it
console.log(fruits); // [ 'Apple', 'Orange' ]

//push  = Append the element to the end of the array
fruits.push("Pear");
fruits.push("grapes"); //[ 'Apple', 'Orange', 'Pear', 'grapes' ]
console.log(fruits);

//shift = Extracts the first element of the array and returns it:
console.log(fruits.shift()); //remove the apple and alert it
console.log(fruits); //[ 'Orange', 'Pear', 'grapes' ]

//unshift = Add the element to the beginning of the array:
fruits.unshift("Mango");
console.log(fruits); //[ 'Mango', 'Orange', 'Pear', 'grapes' ]

//Methods push and unshift can add multiple elements at once:

let fruit = ["Apple"];

fruit.push("Orange", "Peach");
fruit.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruit);

//loops
let X = ["A", "B", "C"];
for (let i = 0; i < X.length; i++) {
  //   alert(X[i]);
  console.log(X[i]);
}
//same for of loop
for (let x of X) {
  console.log(x);
}

//new Array()
let arr = new Array("Apple", "Pear", "etc");

//Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// alert(matrix[1][5]); // 5, the central element

//tostring
let ar = [1, 2, 3];

// alert(ar); // 1,2,3
// alert(String(ar) === "1,2,3"); // true

//Don’t compare arrays with ==
console.log([] == []); // false
console.log([0] == [0]); // false
