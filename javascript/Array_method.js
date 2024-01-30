let num = [1, 2, 3, 45];
let b = num.toString(); // b is now string
console.log(b);

/*
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
let r = fruits.unshift("Mango");
console.log(fruits); //[ 'Mango', 'Orange', 'Pear', 'grapes' ]
console.log(r); //5
*/

//join
let c = num.join("_");
console.log(c); //1_2_3_45
console.log(typeof c); // string
console.log(num); //[ 1, 2, 3, 45 ] object

//delete
let d = ["1", "2", "3", "5", "6", "7", "8"];
let d_d = ["11", "22", "13", "15", "16", "17", "18"];
let ddd = ["211", "222", "213", "215", "216", "217", "218"];

/*
console.log(d.length); // 7
delete d[0];
console.log(d); //[ <1 empty item>, '2', '3', '5', '6', '7', '8' ]
console.log(d.length); //7
*/

/*
let newArray = d.concat(d_d, ddd);
console.log(newArray); //
console.log(d, d_d);
*/

/*
//sort method
let a = ["2", "0", "17", "5", "10", "13", "3"];
a.sort();
console.log(a);
*/

//Splice method
let e = ["1", "2", "3", "5", "6", "7", "8"];

/*
// e.splice(1, 1);
let deletedvalues = e.splice(3, 2, "hello", "bhaii");
console.log(e); //[ '1', '3', '5', '6', '7', '8' ]
console.log(deletedvalues); //[ '5', '6' ]
let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");
console.log(arr); // "I", "study", "complex", "language", "JavaScript"
*/

//slice method
let s = ["1", "2", "3", "5", "6", "7", "8"];
let ss = s.slice(3);
console.log(ss); //[ '5', '6', '7', '8' ]

let arrr = ["t", "e", "s", "t"];

console.log(arrr.slice(1, 3)); // e,s (copy from 1 to 3)

console.log(arrr.slice(-2)); // s,t (copy from -2 till the end)

//indexof & include
let arr1 = [1, 0, "s", false, "aman"];

console.log(arr1.indexOf(0)); //1
console.log(arr1.indexOf(false)); //3
console.log(arr1.indexOf(null)); //-1
console.log(arr1.includes(1)); //true
console.log(arr1.lastIndexOf("aman")); //4

//reverse
/*
let arr2 = [1, 2, 3, 4, 5];
arr.reverse();

console.log(arr2); // 5,4,3,2,1
*/
//split

let names = "Aman,Deep,Singh";
let arr3 = names.split(",");
for (let name of arr3) {
  console.log(`A message of ${name}.`);
}

let str = "test";

console.log(str.split("")); // t,e,s,t

//reduce
let arr4 = [1, 2, 3, 4, 5];

let result = arr4.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

//Sort in decreasing order
let arr5 = [5, 2, 1, -10, 8];

arr5s.sort((a, b) => b - a);

console.log(arr5);

//sort with compare function
//acresing a-b
//decreasing b-a
let compare = (a, b) => {
  return b - a;
};
let n = ["2", "0", "17", "5", "-10", "13", "3"];
n.sort(compare);
console.log(n);
