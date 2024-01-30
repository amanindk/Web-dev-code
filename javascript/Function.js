//Functions
/*
function onePlusavg(x, y) {
  console.log("Done");
  return Math.round(1 + (x + y) / 2); // round off
}
const sum = (p, q) => {
  // arrow function
  return p + q;
};

const hello = () => {
  console.log("hey kiewee hoo , iam okk");
  return "hi";
};
let a = 4;
let b = 5;
let c = 6;

console.log("one plus Average sum of a and b is ", onePlusavg(a, b));
console.log("one plus Average sum of b and c is ", onePlusavg(b, c));
console.log("one plus Average sum of c and a is ", onePlusavg(c, a));
//sum
console.log(sum(3, 4));
//hello func
hello(); // hey kiewee hoo , iam okk  (yeh na hi value lata ha na hi kuch return karta ha)
let v = hello();
console.log(v); //hi
*/

/*
const mygreet = function (name, thank = "thanks too") {
  console.log(
    "Happy Birthday  ${name} How lorem ghqwvdjhwe hwegjhag hqwegdh hq wgy1 xJKQWVghd qdxq d dq  2hg1 e2hg dg2 qed2 2g 23jku2e 1jev2e Happy Birthday Baby ${thank}"
  );
  return 4;
};
let name1 = "lavy";
let name2 = "kavy";
let val = mygreet(name1);
console.log(val);

const myobj = {
  name: "aman",
  game: function () {
    return "GTA";
  },
};
console.log(myobj.game());
*/

//Prime number
/*
function Primes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % 2 == 0) continue nextPrime;
    }
    alert(i);
  }
}
*/
//The better variant, with a factored out function isPrime:
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
