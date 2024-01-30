//Problem 1

/*
let age = prompt("Enter age ");
age = Number.parseInt(age);

  const candrive = (age) => {
    return age > 18 ? true : false;
  };

  if (candrive(age)) {
    alert("yes you can drive");
  } else {
    alert("you cannot drive ");
  }
  
  */
//Problem 2

/*
let runagain = true;
const candrive = (age) => {
  return age > 18 ? true : false;
};

while (runagain) {
  let age = prompt("Enter age ");
  age = Number.parseInt(age);

  if (candrive(age)) {
    alert("yes you can drive");
  } else {
    alert("you cannot drive ");
  }
  runagain = confirm("Do you want to play again?");
}
*/

//problem 3
/*/
let runagain = true;
const candrive = (age) => {
  return age > 18 ? true : false;
};

while (runagain) {
  let age = prompt("Enter age ");
  age = Number.parseInt(age);
  if (age < 0) {
    console.error("Please enterr a valid age");
    break;
  }
  if (candrive(age)) {
    alert("yes you can drive");
  } else {
    alert("you cannot drive ");
  }
  runagain = confirm("Do you want to play again?");
}
*/

//Program 4

let number = prompt("Enter number ");
number = Number.parseInt(number);
if (number > 4) {
  location.href = "https://goggle.com ";
}

//Program 5
let color = prompt("enter the page background color");
document.body.style.background = color;
