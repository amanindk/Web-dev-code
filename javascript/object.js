/*
let x = {
  name: "Rani",
  age: "xyz",
};
// console.log(x.name);
console.log(x["name"]);

let user = {
  name: "aman",
  age: "21",
  job: "engineer",
};
let x = " ";
for (let key in user) {
  x = x + key + " " + user[key];
  x = x + "\n";
}
console.log(x);
*/

//clone
/*
let user = {
    name : "deep",
    age : 23

}
let student = {};
 
for (let key in user ){
    student[key] = user[key]
}
student.name = "deep";
alert 
*/

const mySym = Symbol("key1");

const jsUser = {
  name: "Aman",
  [mySym]: "key1",
  lastname: "singh",
  clg: "Pit",
  location: "Rajpura",
  email: "aman123",
  lastlogindau: ["Monday, Sunday, Wednesday"],
};
// console.log(jsUser.name);
// console.log(jsUser["clg"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser.mySym);

//freeze method

jsUser.email = "deep123";
// console.log(jsUser.email);
// Object.freeze(jsUser); // not change the value
// jsUser.email = "singh123";
// console.log(jsUser);
/*

jsUser.greeting = function () {
  console.log("hello Js user");
};
console.log(jsUser.greeting());
*/

//this method
/*
jsUser.greetingtwo = function () {
  console.log(`hello Js user ${this.lastlogindau}`);
};
console.log(jsUser.greetingtwo());
*/

/*
const tinderUser = new Object();
console.log(tinderUser); //{}
*/

// /*
const tinderUser = {};
tinderUser.id = "Aman@2334";
tinderUser.name = "Rani";
tinderUser.clg = "PIT";
tinderUser.inlogged = true;
// console.log(tinderUser); //{}
// */

/*
const object1 = {
  name: "Aman",
  lastname: "singh",
  object2: {
    coursename: "B.tech",
    fildname: "IT",
    object3: {
      job: "fullstck",
      company: "Google",
    },
  },
};
console.log(object1.object2.object3);
*/

/*
const obj1 = { 1: "a", 4: "d" };
const obj2 = { 2: "b", 5: "e" };
const obj3 = { 3: "c", 6: "f" };

// const obj4 = { obj1, obj2, obj3 };
// const obj4 = Object.assign({}, obj1, obj2, obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj4 = { ...obj1, ...obj2, ...obj3 }; // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj4);
*/

const users = [
  {
    id: 5,
    email: "a@123",
  },
  {
    id: 5,
    email: "a@123",
  },
  {
    id: 5,
    email: "a@123",
  },
];

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.length);
console.log(tinderUser.hasOwnProperty("name")); // true // check the property
console.log(tinderUser.hasOwnProperty("nam")); // false // check the property
