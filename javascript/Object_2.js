//Object.create  that is constructor method and useing singleton
//Singleton

//object literaals
/*               
                           const mySym = Symbol("key1");
                           const aSym = Symbol("Key2");
                           
                           const jsuser = {
                             name: "Raju",
                             "full name": "Raju Singh",
                             age: "12",
                             [mySym]: "mykey1",
                             email: "raju@23",
                             isLoggesdIn: false,
                             lastLoginDays: ["sunday", "monday"],
                             [aSym]: "akey2",
                           };
                           // console.log(typeof jsuser.email);
                           // console.log(jsuser["lastLoginDays"]);
                           // console.log(jsuser.mySym);
                           // console.log(jsuser.name);
                           // console.log(jsuser["name"]);
                           // console.log(jsuser["full name"]);
                           // console.log(jsuser.asym);
                           
                           jsuser.email = "raju@234.com";
                           // Object.freeze(jsuser);
                           jsuser.email = "raju@qwer.com";
                           // console.log(jsuser);
                           
  //Function
  jsuser.greeting = function () {
    console.log("Hello JS user ");
  };
  jsuser.greetingtwo = function () {
    console.log(`Hello JS user, ${this.name}`);
  };
  console.log(jsuser.gree
//obe
/st tinderUser = new object();    // singleton
/*        const tinderUser = {}; // Non Sing
                         (tinderUser.id = "rani@334"),
                           (tinderUser.name = "Amnn"),
                           (tinderUser.inLoggedIn = false);
                         
                         // console.log(tinderUser);
                         
                         const regularUser = {
                           email: "singh@3445",
                           fullname: {
                             userfullname: {
                               firstname: "maan",
                               lastname: "singh",
                             },
                           },
                         };
                         
                         console.log(regularUser.fullname.userfullname.firstname);
                         
                         console.log(regularUser.fullname.userfullname);
                         
                         const obj1 = { 1: "a", 2: "b" };
                         const obj2 = { 3: "c", 4: "d" };
                         const obj4 = { 5: "c", 6: "d" };
                         
                         // const obj3 = Object.assign({}, obj1, obj2, obj4);
                         const obj3 = { ...obj1, ...obj4 };
                         
                         console.log(obj3);
                         
                         const users = [
                           {
                             id: 1,
                             email: "samir@234",
                           },
                           {
                             id: 1,
                             email: "samir@234",
                           },
                           {
                             id: 1,
                             email: "samir@234",
                           },
                         ];
                         users[1].email;
                         console.log(tinderUser);
                         
                         console.log(Object.keys(tinderUser)); //keys
                         
                         console.log(Object.values(tinderUser)); //values
                         console.log(Object.entries(tinderUser)); //entries
                         
                         console.log(tinderUser.hasOwnProperty("name"));
                         */

//javascript

/*
let user = {};

user["likes birds"] = true;
alert(user["likes birds"]);
*/

//multi word property
/*
let user = {
  name: "Aman",
  age: 23,
  "like birds": true, // multiword property name must be quoted
};
*/

/*
let user = {};
//set
user["like - birds"] = true;
//get
alert(user["like - birds"]);
//delete
delete user["like - birds"];
*/

/*
let user = {
  name: "Amm",
  age: 30,
};
let key = "name";
alert(user.key);
*/

/*
let user = {
  name: "John",
  age: 30,
};

let key = prompt("What do you want to know about the user?", "name");

// access by variable
console.log(user[key]); // John (if enter "name")
*/

/*
let fruit = prompt("which fruit to buy ?", "apple");
let bag = {
  [fruit]: 5,
};
alert(bag.apple);
*/

// special property value shorthand
/*
function makeuser(name, age) {
  return {
    name: name,
    age: age,
  };
}

let user = makeuser("aman", 30);
alert(user.name);
alert(user.age);
*/

//Property names limitations

/*
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
alert(obj.for + obj.let + obj.return);
*/

/*
let obj = {
  0: "TEST",
};
alert(obj[0]); //test
alert(obj["0"]); //test
*/

//"for..in" loop

/*
let user = {
  name: "John",
  surname: "Smith",
  clg: "PIT",
};
user.age = 25; // add one more

// non-integer properties are listed in the creation order
for (let prop in user) {
  alert(prop); // name, surname, age
}
*/

/*
                                class Person {
                                  x = 10;
                                  constructor(name, age) {
                                    this.name = name;
                                    this.age = age;
                                  }
                                  agemul(n) {//parameter
                                    console.log(this.age * n);
                                  }
                                }
                                const obj = new Person("John", 20);
                                console.log(obj.age);
                                obj.agemul(4);//arguments
                                */
//rectangle
/*                  
class rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  widthmul(n) {
    console.log(this.width * n);
  }
}
const obj = new rectangle(10, 15);
console.log(obj.height);
obj.widthmul(5);
*/
/*
                          let obj = {
                            for: 1,
                            let: 2,
                            return: 3,
                          };
                          console.log(obj.for + obj.let + obj.return);
*/
/*
const course = {
  course: "js",
  price: 999,
  courseinstructor: "aman",
};
const { courseinstructor: instructor } = course;
console.log(courseinstructor);
// console.log(instructor);

//JSON && api
// {
//   "name": "aman",
//   "coursename": "js"
//   "price": "free"
// }

//Array format api
[{}, {}, {}];
*/

/*
let obj = {
  0: "test",
};
// alert(obj["0"]);
alert(obj[0]);

let user = {
  name: "aman",
  age: 22,
  isAdmin: false,
};
for (let key in user) {
  alert(key);
  alert(user[key]);
}
*/

//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
/*
let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "GET UP";

alert(isEmpty(schedule));
*/

/*
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
*/

/*
let salaries = {
  aman: 100,
  Rani: 200,
  Raju: 300,
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);
*/

//MULTINUMERIC

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
