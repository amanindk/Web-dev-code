let a = Math.random() * 100;
a = Number.parseInt(a);
let inp;
let score = 100;

while (inp != a) {
  score = score - 1;
  inp = prompt("Enter the Number : ");
  if (inp == a) {
    console.log("Congratultion! you guess the correct number. ");
    console.log(`you guess the actual number in ${100 - score}
     chance.`);
  } else if (inp > a && inp < 100) {
    console.log(" Your number is  greater than  the ctul number");
  } else if (inp < a && inp > 0) {
    console.log(" Your number is  s maller than  the ctul number");
  } else {
    console.log("Enter number between 1 to 100");
  }
}
