// map_filter_reduce
//Array.map()-------------------------------------------------------------------------------------------------------------
// what is map ?
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// const nums = [1, 2, 3, 4];
// const multiplethree = nums.map((num, i) => {
//   return num * 3 + i;
// });

// 1*3+0 = 3
// 2*3+1 = 7

// console.log(multiplethree); //[ 3, 6, 9, 12 ]

// filter() --------------------------------------------------------------------------------------------------------
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// const numsfil = [1, 2, 3, -2, -8, 22, 4];
// const morethantwo = numsfil.filter((num, i, arr) => {
//   return num > 2;
// });

// console.log(morethantwo); // [ 3, 22, 4 ]

// array.reduce() -------------------------------------------------------------------------------------------------------
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// const numsred = [1, 2, 3, 4, 5, 6];
// const sum = numsred.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);
// console.log(sum);

//Polyfill for map ----------------------------------------------------------------------------------------------------
// Array.map((num, i, arr) => {});

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4];
const multiplethree = nums.myMap((num, i, arr) => {
  return num * 3;
});

console.log(multiplethree);

//Polyfill for filter ----------------------------------------------------------------------------------------------------

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const numsfil = [1, 2, 3, -2, -8, 22, 4];
const morethantwo = numsfil.myFilter((num, i, arr) => {
  return num > 2;
});

console.log(morethantwo); // [ 3, 22, 4 ]

// Pollyfill for reduce---------------------------------------------------------------------------------------------

Array.prototype.myReduce = function (cb) {
  var accumulatar = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulatar = accumulatar ? cb(accumulatar, this[i], i, this) : this[i];
  }
  return accumulatar;
};

const numsred = [1, 2, 3, 4, 5, 6];
const sum = numsred.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

//Diff b/w map and forEach----------------------------------------------------------------------------------------------

const arr = [1, 2, 3, 4, 5];

const mapresult = arr.map((ar) => {
  return ar * 3;
});

const foreachresult = arr.forEach((ar, i) => {
  arr[i] = ar * 3;
});

console.log(mapresult, arr);

//map, filter, reduce - O/p Based Que/Ans--------------------------------------------------------------------------------
// Question 1: Return only name of student in Capital

let students = [
  {
    name: "Aman",
    rollnumber: 4,
    marks: 34,
  },
  {
    name: "Jana",
    rollnumber: 12,
    marks: 30,
  },
  {
    name: "Ram",
    rollnumber: 9,
    marks: 56,
  },
  {
    name: "sham",
    rollnumber: 14,
    marks: 90,
  },
];

// let names = [];
// for (let i = 0; i < students.length; i++) {
//   names.push(students[i].name.toUpperCase());
// }

// one line code
const names = students.map((stu) => stu.name.toUpperCase());

console.log(names);

// Question 2: Return only details of those who scored more than 60 marks ---------------------------------------------

let students1 = [
  {
    name: "Aman",
    rollnumber: 4,
    marks: 74,
  },
  {
    name: "Jana",
    rollnumber: 12,
    marks: 30,
  },
  {
    name: "Ram",
    rollnumber: 9,
    marks: 56,
  },
  {
    name: "sham",
    rollnumber: 14,
    marks: 90,
  },
];

const details = students1.filter((stu) => stu.marks > 60);

console.log(details);

// Question 3: more than 60 marks and rollnumber greater than 10 ------------------------------------------------------

let students2 = [
  {
    name: "Aman",
    rollnumber: 4,
    marks: 74,
  },
  {
    name: "Jana",
    rollnumber: 12,
    marks: 30,
  },
  {
    name: "Ram",
    rollnumber: 9,
    marks: 56,
  },
  {
    name: "sham",
    rollnumber: 14,
    marks: 90,
  },
];

const details1 = students2.filter(
  (stu) => stu.marks > 60 && stu.rollnumber > 10
);

console.log(details1);

//Question 4: Sum of marks of all students ----------------------------------------------------------------------------
let students3 = [
  {
    name: "Aman",
    rollnumber: 4,
    marks: 74,
  },
  {
    name: "Jana",
    rollnumber: 12,
    marks: 30,
  },
  {
    name: "Ram",
    rollnumber: 9,
    marks: 56,
  },
  {
    name: "sham",
    rollnumber: 14,
    marks: 90,
  },
];

const sum1 = students3.reduce((acc, curr) => acc + curr.marks, 0);
console.log(sum1);

// Question 5: Return only name of students more than 60 scord ------------------------------------------------------

let students4 = [
  {
    name: "Aman",
    rollnumber: 4,
    marks: 74,
  },
  {
    name: "Jana",
    rollnumber: 12,
    marks: 30,
  },
  {
    name: "Ram",
    rollnumber: 9,
    marks: 56,
  },
  {
    name: "sham",
    rollnumber: 14,
    marks: 90,
  },
];

const details2 = students4
  .filter((stu) => stu.marks > 60)
  .map((stu) => stu.name);

console.log(details2);

// Question 6: Return total marks for students with marks greater than 60 after 20 marks have been added
// to those who scored less than 60

let students5 = [
  {
    name: "Aman",
    rollnumber: 4,
    marks: 74,
  },
  {
    name: "Jana",
    rollnumber: 12,
    marks: 30,
  },
  {
    name: "Ram",
    rollnumber: 9,
    marks: 56,
  },
  {
    name: "sham",
    rollnumber: 14,
    marks: 90,
  },
];

const totalMarks = students5
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => stu.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(totalMarks);
