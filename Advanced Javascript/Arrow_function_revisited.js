const hello = (name, greeting) => console.log(greeting + " bhai " + name);
/*
const x = {
  name: "Aman",
  age: 22,
  company: "Dialkro",
  new: function () {
    that = this;
    console.log(this); //object type show data

    setTimeout(function () {
      // console.log(this);  //window
      //   console.log(`The name is ${this.name}\n The age is ${this.age}`);   // name = blank and age = undefined
      console.log(`The name is ${that.name}\n The age is ${that.age}`); // showing proper data
      //    The name is Aman
      //   The age is 22
    }, 2000);
  },
};
*/

const x = {
  name: "Aman",
  age: 22,
  company: "Dialkro",
  new: function () {
    console.log(this); //object type show data

    setTimeout(() => {
      //agar arrow function use kre toh that lagani ki lood nhi ha because arrow ke ander window object nhi hota
      // console.log(this);  //window
      console.log(`The name is ${this.name}\n The age is ${this.age}`);
      //    The name is Aman
      //   The age is 22
    }, 2000);
  },
};

// hello("Aman ", " Good Morning");
// console.log(x.name, x.age);
x.new();
