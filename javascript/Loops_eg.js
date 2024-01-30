/*// Print Table any Number
var n = prompt("enter the no."); // html file  loop_star_print
for (var i = 1; i <= 10; i++) {
  //   console.log(i * n);
  // document.write(n + " * " + i + " = " + i * n);
  // console.log(n + " * " + i + " = " + i * n);
  document.write(n + " * " + i + " = " + i * n);
  document.write("<br>");
}
*/
/*
                                            //print 1 to 100
                                            let n = 10;
                                            for (let i = 1; i <= 10; i++) {
                                              console.log(i);
                                            }
                                            */
/*
//Triangle pattern
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);
*/
/*
                                              //Reverse_star_triangle 
                                              let n = 5;
                                              let string = "";
                                              for (let i = 1; i <= n; i++) {
                                                for (let j = 1; j <= n - i + 1; j++) {
                                                  string += "*";
                                                }
                                                string += "\n";
                                              }
                                              console.log(string);
                                              */
/*
let firstname = "Aman";
let surename = "Deep";
for (let i = 1; i <= 5; i++) {
  console.log(firstname);
  console.log(surename);
}
*/
/*
let h;
for (h = 1; h <= 10; h++) {
  if (h == 5) {
    console.log("Aman");
  } else {
    console.log("Deep");
  }
}
*/

// Program
// write a program to print the marks of a students in an object using for loop
let marks = {
  Aman: 100,
  Rahul: 60,
  Rani: 39,
  Deepak: 49,
};
//Problem 1
/*
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "The marks of " +
      Object.keys(marks)[i] +
      " are " +
      marks[Object.keys(marks)[i]]
  );
}
*/
//Problem 2  Using in for loop
/*
                                                for (let key in marks) {
                                                  console.log("The marks of " + key + "are " + marks[key]);
                                                }
                                                */
//Write a prograam to print "Try Again" until the user enters the correct no.
/*
let cn = 27;
let i;
while (i != cn) {
  console.log("Try Again");
  i = prompt("Enter the Correct Number");
}
console.log("you have entered a correct number");
*/
//Problem 4
//write a function to find mean of 5 number
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 5;
};
console.log(mean(4, 5, 6, 7));
