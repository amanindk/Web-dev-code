/*
var users = {
  name: "Ramu",
  age: 22,
};
// var clone = users;
// clone.name = "rani";
//  clone.age = 20;
//  clone.class = "B Tech;

clone = {};

for (let user in users) {
  clone[user] = user[user];
}
//
clone.name = "peter";
//    let property1 = { name2: "Raju" };
//    Object.assign(users, property1);

var clone = Object.assign({}, users);
clone.name = "peter";

console.log(users, clone);
*/
/*
const person = {
  name: "ammy",
  lastname: "virk",
};
person.name = "Singh";
console.log(person);
*/
/*
var a = 10;
var b = a;
--b;
console.log(a, b);
*/

// let users = "Message";
// let admin = users; //copy the message

// cpy the refference

/*
let users = { name: "Aman" };
let admin = users; // copy the reference
admin.name = "Deep";
alert(admin.name);
*/

/*
                             //comparision by refernece
                             let a = {};
                             let b = a; // copy the refernece
                             alert(a == b);
                             alert(a === b);
                             */
/*
let a = {};
let b = {}; //two independent objects

alert(a == b);
*/

//const objects can be modified
/*
const user = {
  name: "Aman",
};
user.name = "Singh";
alert(user.name);
*/

/*
//cloning and merging
let user = {
  name: "Aman",
  age: 59,
};
let clone = {}; // New Empty object

//let copy all users properteis into it
for (let key in user) {
  clone[key] = user[key];
}

clone.name = "deep";
alert(user.name);
*/

//Object.assign

/*
let user = { name: "aman" };
let permission1 = { canView: True };
let permission2 = { canEdit: True };

Object.assign(user, permission1, permission2);
alert(user.name);
alert(user.canView);
alert(user.canEdit);
*/

//Object references and copying
/*
var a = 10;
var b = a;
++b;
console.log(a, b);
*/

/*
var user = {
  name: "Aman",
  clg: "PIT",
};

var clone = user;
clone.name = "deep";
console.log(clone, user);
*/

// /*
var users = {
  name: "Aman",
  clg: "PIT",
};
clone = {};

for (let user in users) {
  clone[user] = users[user];
}
clone.clg = "IIT";
console.log(users, clone);
// alert(users, clone);
// */

//object.assign
/*
var users = {
  name: "Aman",
  clg: "PIT",
};
clone = {};
let property = { name1: "Deep" };
// Object.assign(users, property);
// Object.assign(users, { name1: "Deep" });
Object.assign(users, { name: "Deep" });
console.log(users);
*/

/*
var users = {
  name: "Aman",
  clg: "PIT",
};
var clone = Object.assign({}, users);
clone.name = "Deep";
console.log(users, clone);
*/

//const value changed
/*
const person = {
  name: "Ram",
  clg: "PIT",
};
person.name = "Radhe";
console.log(person);
*/
